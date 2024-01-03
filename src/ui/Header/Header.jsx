import "./header.css";
function Header({ children }) {
  return (
    <div className="box-header">
      <header className="header">{children}</header>
    </div>
  );
}

export default Header;
