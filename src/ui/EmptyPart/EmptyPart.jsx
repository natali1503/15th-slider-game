import { useGame } from "../../context/gameContext";
import "./emptyPart.css";

function EmptyPart({ children }) {
  const { drivingDirections } = useGame();
  const { up, right, left, down } = drivingDirections;
  return <div className={`emptyPart`}>{children}</div>;
}

export default EmptyPart;
