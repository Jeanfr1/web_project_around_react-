import logo_around_the_us from "../images/logo_around-the-us.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={logo_around_the_us}
        alt="Around Th US logo"
        className="header__logo"
      />
    </header>
  );
}
