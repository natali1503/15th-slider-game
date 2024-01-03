import "./button.css";
function Button({ children, onClick, className = "", name }) {
  return (
    <button onClick={onClick} className={`button ${className}`} name={name}>
      {children}
    </button>
  );
}

export default Button;
