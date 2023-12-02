import { createContext, useContext, useReducer } from "react";
import { changeArr } from "../features/changeArr";
import { getIndexNull } from "../features/getIndexNull";

const initialState = {
  size: 9,
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2zgLauMnxfVrrLoVZPgP2bokLkPjVeX10Q&usqp=CAU",
  isGame: false,
  brokenImage: [],
  drivingDirections: {
    up: true,
    right: false,
    left: true,
    down: false,
  },
  freePlace: 0,
  moveStep: 0,
};
const GameContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "startGame":
      return {
        ...state,
        isGame: true,
        freePlace: state.size - 1,
        moveStep: Math.sqrt(state.size),
      };
    case "loadData":
      return {
        ...state,
        brokenImage: action.payload,
      };
    case "ArrowUp": {
      const newPlace = state.freePlace - state.moveStep;
      return {
        ...state,
        brokenImage: changeArr(state.freePlace, newPlace, state.brokenImage),
        freePlace: state.freePlace - state.moveStep,
      };
    }
    case "ArrowLeft": {
      const newPlace = state.freePlace - 1;
      return {
        ...state,
        brokenImage: changeArr(state.freePlace, newPlace, state.brokenImage),
        freePlace: state.freePlace - 1,
      };
    }
    case "ArrowDown": {
      const newPlace = state.freePlace + state.moveStep;
      return {
        ...state,
        brokenImage: changeArr(state.freePlace, newPlace, state.brokenImage),
        freePlace: state.freePlace + state.moveStep,
      };
    }
    case "ArrowRight": {
      const newPlace = state.freePlace + 1;
      return {
        ...state,
        brokenImage: changeArr(state.freePlace, newPlace, state.brokenImage),
        freePlace: state.freePlace + 1,
      };
    }

    case "changeDrivingDirections":
      return {
        ...state,
        drivingDirections: {
          up: getIndexNull(state.brokenImage) - state.moveStep >= 0,
          right: (getIndexNull(state.brokenImage) + 1) % state.moveStep !== 0,
          left: getIndexNull(state.brokenImage) % state.moveStep !== 0,
          down:
            getIndexNull(state.brokenImage) + state.moveStep <= state.size - 1,
        },
      };
    default:
      throw new Error("Неизвестный тип");
  }
}

function GameProvaider({ children }) {
  const [{ isGame, brokenImage, size, drivingDirections }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <GameContext.Provider
      value={{ isGame, brokenImage, size, drivingDirections, dispatch }}
    >
      {children}
    </GameContext.Provider>
  );
}
function useGame() {
  const contex = useContext(GameContext);
  if (contex === undefined)
    throw new Error("GameContext используется вне GameProvaider");

  return contex;
}

export { GameProvaider, useGame };
