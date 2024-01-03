import { useEffect, useState } from "react";
import {
  HiChevronDoubleDown,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronDoubleUp,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import Loader from "../../ui/Loader/Loader";
import PartOfImage from "../../ui/PartOfImage/PartOfImage";
import EmptyPart from "../../ui/EmptyPart/EmptyPart";
import { useGame } from "../../context/gameContext";
import { checkVictory } from "../../features/checkVictory";
import { getRandomBrokenImage } from "../../features/getRandomBrokenImage";
import "./field.css";
import "./field-size-16.css";
import "./field-size-9.css";
import "./field-size-25.css";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
function Field() {
  const { isGame, brokenImage, dispatch, drivingDirections, size, url } =
    useGame();
  const { up, right, left, down } = drivingDirections;
  const navigate = useNavigate();
  const [isShowImage, setIsShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleClick(direction, brokenImage) {
    dispatch({ type: direction });

    dispatch({
      type: "changeDrivingDirections",
    });

    return;
  }
  useEffect(
    function () {
      function handleKeyDown(e) {
        const typeDirection = [
          "ArrowUp",
          "ArrowLeft",
          "ArrowDown",
          "ArrowRight",
        ];
        const direction = e.key;
        if (!typeDirection.includes(direction)) return;
        else {
          dispatch({ type: direction });
          dispatch({
            type: "changeDrivingDirections",
          });

          return;
        }
      }
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [dispatch]
  );
  useEffect(
    function () {
      if (!isGame) navigate("/");
    },
    [isGame, navigate]
  );
  useEffect(
    function () {
      if (checkVictory(brokenImage)) navigate("/victory");
    },
    [brokenImage, navigate]
  );
  useEffect(
    function () {
      if (isShowImage) {
        document.body.classList.add("active-modal");
      } else {
        document.body.classList.remove("active-modal");
      }
    },
    [isShowImage]
  );

  function handleClickNewGame() {
    setIsLoading((isLoading) => !isLoading);
    getRandomBrokenImage(size, url).then((res) => {
      dispatch({ type: "loadData", payload: res });
      setIsLoading((isLoading) => !isLoading);
    });
  }

  return (
    <div className="container-main">
      {isLoading && <Loader />}
      <Header>
        <div className="btn-menu">
          <Button
            className="oval"
            onClick={() => {
              dispatch({ type: "endGame" });
              navigate("/");
            }}
          >
            Назад
          </Button>
          <Button className="oval" onClick={() => handleClickNewGame()}>
            С начала
          </Button>
          <Button
            className="oval"
            onClick={() => setIsShowImage((isShow) => !isShow)}
          >
            Подсказка
          </Button>
        </div>
      </Header>

      <div className="content-field">
        <div className={`field-size-${size}`}>
          {brokenImage.map((part, index) =>
            part.image !== null ? (
              <PartOfImage key={index} index={index} src={part.image} />
            ) : (
              <EmptyPart key={index}>
                {up && (
                  <Button
                    className="btn-direction direction-up"
                    onClick={() => handleClick("ArrowUp", brokenImage)}
                  >
                    <HiChevronDoubleUp />
                  </Button>
                )}
                {right && (
                  <Button
                    className="btn-direction direction-right"
                    onClick={() => handleClick("ArrowRight", brokenImage)}
                  >
                    <HiChevronDoubleRight />
                  </Button>
                )}
                {left && (
                  <Button
                    className="btn-direction direction-left"
                    onClick={() => handleClick("ArrowLeft", brokenImage)}
                  >
                    <HiChevronDoubleLeft />
                  </Button>
                )}
                {down && (
                  <Button
                    className="btn-direction direction-down"
                    onClick={() => handleClick("ArrowDown", brokenImage)}
                  >
                    <HiChevronDoubleDown />
                  </Button>
                )}
              </EmptyPart>
            )
          )}
        </div>
      </div>
      {isShowImage && (
        <Modal
          onClick={() => setIsShowImage((isShow) => !isShow)}
          header="Собери картинку"
          content={<img src={url} alt="" className="img-show" />}
        />
      )}
      <Footer>
        <img src="./Group 1 (1).svg" alt="" className="img-footer" />
      </Footer>
    </div>
  );
}

export default Field;
