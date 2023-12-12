import "./header.css";
function Header({ children }) {
  return (
    <div className="box-header">
      <h1 className="header">{children}</h1>
    </div>
  );
}

export default Header;
