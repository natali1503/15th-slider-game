import { useEffect } from "react";
import { useGame } from "../context/gameContext";
import PartOfImage from "../ui/PartOfImage";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import EmptyPart from "../ui/EmptyPart";
import { isMoved } from "../features/isMoved";
import { checkVictory } from "../features/checkVictory";

function Field() {
  const { isGame, brokenImage, dispatch, drivingDirections } = useGame();
  const { up, right, left, down } = drivingDirections;
  const navigate = useNavigate();

  function handleKeyDown(e, brokenImage) {
    const direction = e.key;
    if (isMoved(direction, brokenImage)) {
      dispatch({ type: direction });

      dispatch({
        type: "changeDrivingDirections",
      });
    }
    return;
  }
  function handleClick(direction, brokenImage) {
    if (isMoved(direction, brokenImage)) {
      dispatch({ type: direction });

      dispatch({
        type: "changeDrivingDirections",
      });
    }
    return;
  }
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
  return (
    <div
      tabIndex="0"
      style={{ display: "flex", flexWrap: "wrap" }}
      onKeyDown={(e) => handleKeyDown(e, brokenImage)}
    >
      {brokenImage.map((part, index) =>
        part.image !== null ? (
          <PartOfImage key={index} index={index} src={part.image} />
        ) : (
          <EmptyPart key={index}>
            {up && (
              <Button onClick={() => handleClick("ArrowUp", brokenImage)}>
                up
              </Button>
            )}
            {right && (
              <Button onClick={() => handleClick("ArrowRight", brokenImage)}>
                right
              </Button>
            )}
            {left && (
              <Button onClick={() => handleClick("ArrowLeft", brokenImage)}>
                left
              </Button>
            )}
            {down && (
              <Button onClick={() => handleClick("ArrowDown", brokenImage)}>
                down
              </Button>
            )}
          </EmptyPart>
        )
      )}
    </div>
  );
}

export default Field;
