import { useEffect, useState } from "react";
import {
  HiChevronDoubleDown,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronDoubleUp,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import PartOfImage from "../../ui/PartOfImage";
import Button from "../../ui/Button";
import EmptyPart from "../../ui/EmptyPart";
import Сontainer from "../../ui/Сontainer";
import { useGame } from "../../context/gameContext";
import { checkVictory } from "../../features/checkVictory";
import { getRandomBrokenImage } from "../../features/getRandomBrokenImage";
import "./field.css";
import { IoCloseSharp } from "react-icons/io5";

function Field() {
  const { isGame, brokenImage, dispatch, drivingDirections, size, url } =
    useGame();
  const { up, right, left, down } = drivingDirections;
  const navigate = useNavigate();
  const [isShowImage, setIsShowImage] = useState(false);

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
        const direction = e.key;
        dispatch({ type: direction });
        dispatch({
          type: "changeDrivingDirections",
        });

        return;
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
  function handleClickNewGame() {
    getRandomBrokenImage(size, url).then((res) => {
      dispatch({ type: "loadData", payload: res });
      navigate("/playingField");
    });
  }

  return (
    <Сontainer>
      <div className="box">
        {/* {isShowImage && (
          <div className="show-image">
            <div>
              <Button
                className="btn-show-image"
                onClick={() => setIsShowImage((isShow) => !isShow)}
              >
                <IoCloseSharp />
              </Button>
            </div>
            <div>
              <img src={url} alt="" />
            </div>
          </div>
        )} */}
        <div className="btn-menu">
          <Button className="button" onClick={() => handleClickNewGame()}>
            Начать сначала
          </Button>
          <Button
            className="button"
            onClick={() => setIsShowImage((isShow) => !isShow)}
          >
            Показать картинку
          </Button>
        </div>

        {isShowImage ? (
          <div className="show-image">
            <div>
              <Button
                className="btn-show-image"
                onClick={() => setIsShowImage((isShow) => !isShow)}
              >
                <IoCloseSharp />
              </Button>
            </div>
            <div>
              <img src={url} alt="" />
            </div>
          </div>
        ) : (
          <div tabIndex="0" className={`field-size-${size}`}>
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
        )}
      </div>
    </Сontainer>
  );
}

export default Field;
