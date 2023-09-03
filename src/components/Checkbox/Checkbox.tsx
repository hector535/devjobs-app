import { useEffect, useState } from "react";
import clsx from "clsx";
import { type CheckboxProps } from "./types";
import style from "./Checkbox.module.scss";

export const Checkbox = (props: CheckboxProps) => {
  const { label, checked = false, className, onChange } = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange(e.target.checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;

    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <label
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={clsx(style.checkbox_container, className)}
    >
      <input
        className={style.hidden_checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className={style.checkbox}></span>
      <span className={style.text}>{label}</span>
    </label>
  );
};
