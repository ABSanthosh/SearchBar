import "./Header.scss";
import Logo from "../../assets/react.svg";

function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="HeaderWrapper">
      <div className="HeaderWrapper--left">
        <img src={Logo} />
      </div>
      <div className="HeaderWrapper--right">{children}</div>
    </header>
  );
}

export default Header;
