import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Footer from "../../ui/Footer/Footer";
import "./victory.css";
function Victory() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/15th-slider-game/playingField");
  }
  return (
    <div className="container-main">
      <div className="content-victory">
        <h3 className="text-victory">
          Ура! У тебя получилось составить изображение!
        </h3>
        <Button className="oval" onClick={handleClick}>
          Повторить
        </Button>
      </div>

      <Footer>
        <img className="img-footer" src="./Group 1.svg" alt="" />
      </Footer>
    </div>
  );
}

export default Victory;
