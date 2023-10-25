import css from "./Header.module.css";
import { Logo } from "../Logo/Logo";

export function Header() {
  return (
    <header className={css.root}>
      <div className={css.title}>Apple clicker</div>
      <div className={css.logo}>
        <Logo />
      </div>
    </header>
  );
}
