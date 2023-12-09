import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getRandomBrokenImage } from "../../features/getRandomBrokenImage";
import { useGame } from "../../context/gameContext";
import Сontainer from "../../ui/Сontainer";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Rules from "../Rules/Rules";
import "./startGame.css";

function StartGame() {
  const { isGame, size, dispatch, url } = useGame();
  const [isOpenRules, setIsOpenRules] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const watchSelectImage = watch("selectImage") === "user";

  function onSubmit(data, e) {
    const nameButton = e.nativeEvent.submitter.name;
    if (nameButton === "openRuls") setIsOpenRules((isOpen) => !isOpen);
    else if (nameButton === "startGame") {
      dispatch({
        type: "startGame",
        payload: {
          image: { selectImage: data.selectImage, url: data.urlImage },
          sizeField: Number(data.sizeField),
        },
      });
      getRandomBrokenImage(size, url).then((res) => {
        dispatch({ type: "loadData", payload: res });
        navigate("/playingField");
      });
    }
  }
  return (
    <Сontainer>
      {isOpenRules && (
        <Rules
          size={size}
          onClick={() => setIsOpenRules((isOpen) => !isOpen)}
        />
      )}
      <div className="container">
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="https//:"
                  {...register(
                    "urlImage",

                    {
                      pattern: {
                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                        message: "Укажи ссылку в формате http",
                      },
                      required: watchSelectImage
                        ? "Укажи адрес картинки"
                        : false,
                    }
                  )}
                  type={watchSelectImage ? "text" : "hidden"}
                ></input>

                {watchSelectImage && errors.urlImage && (
                  <div className="error-form">{errors.urlImage.message}</div>
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
            <Button className="button" name="startGame">
              Начать игру
            </Button>
            <Button className="button" name="openRuls">
              Правила
            </Button>
          </div>
        </Form>
        <div className="game-image-preview">
          <img className="img" src={!watchSelectImage ? url : ""} alt="" />
        </div>
      </div>
    </Сontainer>
  );
}

export default StartGame;
