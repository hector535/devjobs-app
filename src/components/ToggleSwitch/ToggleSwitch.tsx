import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon/Icon";
import {
  getThemeFromFlag,
  getThemeFromStorage,
  setDocumentTheme,
} from "./utils";
import style from "./ToggleSwitch.module.scss";

export const ToggleSwitch = () => {
  const [checked, setChecked] = useState(getThemeFromStorage);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.code !== "Enter" && e.code !== "Space") return;

    setChecked(!checked);
  };

  useEffect(() => {
    localStorage.setItem("theme", getThemeFromFlag(checked));
    setDocumentTheme(checked);
  }, [checked]);

  return (
    <label
      tabIndex={0}
      className={style.toggle_switch_container}
      onKeyDown={handleKeyDown}
    >
      <Icon name="sun" />
      <span className={style.toggle}>
        <input
          type="checkbox"
          className={style.inner_checkbox}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className={style.switch}></span>
      </span>
      <Icon name="moon" />
    </label>
  );
};
