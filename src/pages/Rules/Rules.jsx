import "./rules.css";
import Modal from "../../ui/Modal/Modal";

function Rules({ size, onClick, isOpen }) {
  const sizeField = ` ${Math.sqrt(size)}x${Math.sqrt(size)} `;

  const content = (
    <ul className="list-ruls">
      <li className="list-items">
        <span className="header-items">Начальное расположение:</span> На доске
        размером
        {sizeField}
        изображено какое-то изображение, разбитое на квадраты. Одна из ячеек
        пуста.
      </li>
      <li className="list-items">
        <span className="header-items">Перемещение костяшек:</span> Передвигай
        квадраты, перемещая их в пустую ячейку. Для этого кликни по спецаильным
        кнопкам направления движения или используй кнопки стрелок на клавиатуре.
      </li>
      <li className="list-items">
        <span className="header-items">Цель игры:</span> Упорядочить квадраты
        так, чтобы сформировалось изображение.
      </li>
      <li className="list-items">
        <span className="header-items">Ходы:</span> Передвигай квадраты. Игра
        продолжается до тех пор, пока не упорядочатся все ячейки в правильном
        порядке и не получится изображение.
      </li>
      <li className="list-items">
        <span className="header-items">Победа:</span> Игра считается выигранной,
        когда все квадраты упорядочены и формируют изображение.
      </li>
      <li className="list-items">
        <span className="header-items">Сложность:</span> Можно менять размер
        доски (количество квадратов) и изображение.
      </li>
      <li className="list-items">
        <span className="header-items">Дополнительные правила:</span> В процессе
        игры присутствует возможность просмотра исходного изображения.
      </li>
    </ul>
  );
  return (
    <Modal
      header="Правила игры"
      content={content}
      onClick={onClick}
      isOpen={isOpen}
    />
  );
}
export default Rules;
