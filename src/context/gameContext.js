import { createContext, useContext, useReducer } from "react";
import { changeArr } from "../features/changeArr";
import { getIndexNull } from "../features/getIndexNull";
import { isMoved } from "../features/isMoved";

const initialState = {
  size: 16,
  url: "https://images.unsplash.com/photo-1579677359441-a59fa83ecc40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        size: action.payload.sizeField,
        url: action.payload.image.fileImage
          ? action.payload.image.fileImage
          : state.url,
        isGame: true,
        freePlace: action.payload.sizeField - 1,
        moveStep: Math.sqrt(action.payload.sizeField),
      };
    case "loadData":
      return {
        ...state,
        drivingDirections: initialState.drivingDirections,
        brokenImage: action.payload,
      };
    case "ArrowUp": {
      if (!isMoved("ArrowUp", state.brokenImage)) return state;
      const newPlace = state.freePlace - state.moveStep;
      return {
        ...state,
        brokenImage: changeArr(state.freePlace, newPlace, state.brokenImage),
        freePlace: state.freePlace - state.moveStep,
      };
    }
    case "ArrowLeft": {
      if (!isMoved("ArrowLeft", state.brokenImage)) return state;
      const newPlace = state.freePlace - 1;
      return {
        ...state,
        brokenImage: changeArr(state.freePlace, newPlace, state.brokenImage),
        freePlace: state.freePlace - 1,
      };
    }
    case "ArrowDown": {
      if (!isMoved("ArrowDown", state.brokenImage)) return state;
      const newPlace = state.freePlace + state.moveStep;
      return {
        ...state,
        brokenImage: changeArr(state.freePlace, newPlace, state.brokenImage),
        freePlace: state.freePlace + state.moveStep,
      };
    }
    case "ArrowRight": {
      if (!isMoved("ArrowRight", state.brokenImage)) return state;
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
    case "endGame":
      return {
        ...initialState,
      };
    default:
      throw new Error("Неизвестный тип");
  }
}

function GameProvaider({ children }) {
  const [{ isGame, brokenImage, size, drivingDirections, url }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <GameContext.Provider
      value={{ isGame, brokenImage, size, drivingDirections, dispatch, url }}
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
