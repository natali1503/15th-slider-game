function Button({ children, onClick, className, name }) {
  return (
    <button onClick={onClick} className={className} name={name}>
      {children}
    </button>
  );
}

export default Button;
