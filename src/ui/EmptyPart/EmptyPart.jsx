import { useGame } from "../../context/gameContext";
import "./emptyPart.css";

function EmptyPart({ children }) {
  return <div className={`emptyPart`}>{children}</div>;
}

export default EmptyPart;
