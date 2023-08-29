import clsx from "clsx";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={clsx("container", style.header_content)}>
        <img src="/desktop/logo.svg" alt="logo of the website" />
        <ToggleSwitch />
      </div>
    </header>
  );
};
