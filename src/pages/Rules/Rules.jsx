import Button from "../../ui/Button";
import { IoCloseSharp } from "react-icons/io5";
import "../Rules/rules.css";

function Rules({ size, onClick }) {
  return (
    <div className="container-ruls">
      <div className="header-ruls">
        <h3>Правила игры</h3>
        <Button onClick={onClick} className="btn-ruls">
          <IoCloseSharp />
        </Button>
      </div>
      <div className="text-ruls">
        <ul className="list-ruls">
          <li className="list-items">
            <span className="header-items">Начальное расположение:</span> На
            доске размером
            {` ${Math.sqrt(size)}x${Math.sqrt(size)} `}
            изображено какое-то изображение, разбитое на квадраты. Одна из ячеек
            пуста.
          </li>
          <li className="list-items">
            <span className="header-items">Перемещение костяшек:</span>{" "}
            Передвигай квадраты, перемещая их в пустую ячейку. Для этого кликни
            по спецаильным кнопкам направления движения или используй кнопки
            стрелок на клавиатуре.
          </li>
          <li className="list-items">
            <span className="header-items">Цель игры:</span> Упорядочить
            квадраты так, чтобы сформировалось изображение.
          </li>
          <li className="list-items">
            <span className="header-items">Ходы:</span> Передвигай квадраты.
            Игра продолжается до тех пор, пока не упорядочатся все ячейки в
            правильном порядке и не получится изображение.
          </li>
          <li className="list-items">
            <span className="header-items">Победа:</span> Игра считается
            выигранной, когда все квадраты упорядочены и формируют изображение.
          </li>
          <li className="list-items">
            <span className="header-items">Сложность:</span> Можно менять размер
            доски (количество квадратов) и изображение.
          </li>
          <li className="list-items">
            <span className="header-items">Дополнительные правила:</span> В
            процессе игры присутствует возможность просмотра исходного
            изображения.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Rules;
