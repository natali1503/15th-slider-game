import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useGame } from "../../context/gameContext";
import { getRandomBrokenImage } from "../../features/getRandomBrokenImage";
import { saveImgToLocalStorage } from "../../features/saveImgToLocalStorage";
import Footer from "../../ui/Footer/Footer";
import Header from "../../ui/Header/Header";
import "./startGame.css";
import Loader from "../../ui/Loader/Loader";
import Button from "../../ui/Button/Button";
import Rules from "../Rules/Rules";

function StartGame() {
  const { size, dispatch, url } = useGame();
  const [isOpenRules, setIsOpenRules] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUserImg, setIsLoadingUserImg] = useState(false);
  const [userImg, setUserImg] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const watchSelectImage = watch("selectImage") === "user";
  const watchFileImage = watch("fileImage", false);
  const watchChangeFileImage = watch("fileImage", false).length === 1;

  function onSubmit(data, e) {
    const nameButton = e.nativeEvent.submitter.name;
    if (nameButton === "openRuls") setIsOpenRules((isOpen) => !isOpen);
    else if (nameButton === "startGame" && data.selectImage === "user") {
      setIsLoading((isLoading) => !isLoading);
      dispatch({
        type: "startGame",
        payload: {
          image: {
            selectImage: data.selectImage,
            fileImage: userImg,
          },
          sizeField: Number(data.sizeField),
        },
      });
      getRandomBrokenImage(data.sizeField, userImg).then((res) => {
        dispatch({ type: "loadData", payload: res });
        setIsLoading((isLoading) => !isLoading);
        navigate("/playingField");
      });
    } else if (nameButton === "startGame" && data.selectImage === "standart") {
      dispatch({
        type: "startGame",
        payload: {
          image: {
            selectImage: data.selectImage,
            fileImage: url,
          },
          sizeField: Number(data.sizeField),
        },
      });
      getRandomBrokenImage(data.sizeField, url).then((res) => {
        dispatch({ type: "loadData", payload: res });
        navigate("/playingField");
      });
    }
  }

  useEffect(
    function () {
      if (!watchChangeFileImage) {
        return;
      } else {
        setIsLoadingUserImg((isLoading) => !isLoading);

        saveImgToLocalStorage(watchFileImage[0]).then((urlImg) => {
          setUserImg(() => urlImg);
          setIsLoadingUserImg((isLoading) => !isLoading);
        });
      }
      return;
    },
    [watchFileImage, setIsLoadingUserImg, setUserImg, watchChangeFileImage]
  );
  useEffect(
    function () {
      if (isOpenRules) {
        document.body.classList.add("active-modal");
      } else {
        document.body.classList.remove("active-modal");
      }
    },
    [isOpenRules]
  );

  return (
    <div className="container-main">
      <Header>Пятнашки с изображением</Header>
      {(isLoading || isLoadingUserImg) && <Loader />}
      {isOpenRules && (
        <Rules
          onClick={() => setIsOpenRules((isOpen) => !isOpen)}
          size={size}
          isOpen={isOpenRules}
        />
      )}
      <div className="content-startGame">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="row-form">
            <div className="question"> Выбери изображание для игры:</div>
            <div className="answer">
              <label className="label">
                <input
                  className="input"
                  type="radio"
                  value="standart"
                  defaultChecked={true}
                  {...register("selectImage")}
                />
                Стандартное
              </label>
              <label className="label">
                <input
                  className="input"
                  type="radio"
                  value="user"
                  {...register("selectImage")}
                />
                Свое изображение
              </label>
              <label className="label">
                <input
                  className="input"
                  type={watchSelectImage ? "file" : "hidden"}
                  placeholder="https//:"
                  {...register("fileImage", {
                    required: watchSelectImage
                      ? "Необходимо выбрать изображение"
                      : false,
                  })}
                ></input>
                {watchSelectImage && errors.fileImage && (
                  <div className="error-form">{errors.fileImage.message}</div>
                )}
              </label>
            </div>
          </div>
          <div className="row-form">
            <div className="question"> Выбери размер игрового поля:</div>
            <div className="answer">
              <label className="label">
                <input
                  className="input"
                  type="radio"
                  value="9"
                  {...register("sizeField")}
                />
                9
              </label>
              <label className="label">
                <input
                  className="input"
                  type="radio"
                  value="16"
                  defaultChecked={true}
                  {...register("sizeField")}
                />
                16
              </label>
              <label className="label">
                <input
                  className="input"
                  type="radio"
                  value="25"
                  {...register("sizeField")}
                />
                25
              </label>
            </div>
          </div>
          <div className="button-menu">
            <Button name="startGame" className="oval">
              Играть
            </Button>
            <Button name="openRuls" className="oval">
              Правила
            </Button>
          </div>
        </form>
        <div className="game-image-preview">
          {!watchSelectImage && <img className="img" src={url} alt="" />}
          {watchSelectImage && !watchChangeFileImage && (
            <p>Загрузи изображение</p>
          )}
          {watchSelectImage && watchChangeFileImage && !isLoadingUserImg && (
            <img className="img" src={userImg} alt="" />
          )}
        </div>
      </div>
      <Footer>
        <img className="img-footer" src="Group 1.svg" alt="" />
      </Footer>
    </div>
  );
}

export default StartGame;
