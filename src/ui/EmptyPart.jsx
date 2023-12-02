import { useGame } from "../context/gameContext";

function EmptyPart({ children }) {
  const { drivingDirections } = useGame();
  const { up, right, left, down } = drivingDirections;
  return (
    <div
      className={`emptyPart ${down && "emptyPartDown"} ${up && "emptyPartUp"} ${
        right && "emptyPartRight"
      } ${left && "emptyPartlLeft"}`}
    >
      {children}
    </div>
  );
}

export default EmptyPart;
