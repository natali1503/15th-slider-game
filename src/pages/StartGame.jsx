import { useEffect } from "react";
import { useGame } from "../context/gameContext";
import { useNavigate } from "react-router-dom";
import { getRandomBrokenImage } from "../features/getRandomBrokenImage";
import { useForm } from "react-hook-form";

function StartGame() {
  const { isGame, size, dispatch } = useGame();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  useEffect(
    function () {
      const url =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2zgLauMnxfVrrLoVZPgP2bokLkPjVeX10Q&usqp=CAU";

      if (isGame) {
        getRandomBrokenImage(size, url).then((res) => {
          dispatch({ type: "loadData", payload: res });
          navigate("/playingField");
        });
      }
    },
    [isGame, navigate, size, dispatch]
  );

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button onClick={() => dispatch({ type: "startGame" })}>
        Начать игру
      </button>
      <div>
        Выбери изображание для игры:
        <label>
          <input
            type="radio"
            value="standart"
            defaultChecked={true}
            {...register("selectImage")}
          />
          Стандартное
        </label>
        <label>
          <input type="radio" value="user" {...register("selectImage")} />
          Свое изображение
        </label>
        <label>
          <input placeholder="https//:" {...register("urlImage")}></input>
        </label>
      </div>
      <div>
        Выбери размер игрового поля:
        <label>
          <input type="radio" value="9" {...register("sizeField")} />9
        </label>
        <label>
          <input
            type="radio"
            value="16"
            defaultChecked={true}
            {...register("sizeField")}
          />
          16
        </label>
        <label>
          <input type="radio" value="25" {...register("sizeField")} />
          25
        </label>
      </div>
    </form>
  );
}

export default StartGame;
