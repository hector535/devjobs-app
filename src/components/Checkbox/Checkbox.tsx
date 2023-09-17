import { useRef } from "react";
import clsx from "clsx";
import { type CheckboxProps } from "./checkbox.types";
import style from "./checkbox.module.scss";

export const Checkbox = (props: CheckboxProps) => {
  const { label, className, ...restProps } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.code !== "Space") return;
    if (!checkboxRef.current) return;

    const checkbox = checkboxRef.current;

    checkbox.checked = !checkbox.checked;

    checkbox.dispatchEvent(new Event("change"));
  };

  return (
    <label
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={clsx(style.checkbox_container, className)}
    >
      <input
        {...restProps}
        type="checkbox"
        ref={checkboxRef}
        className={style.hidden_checkbox}
      />
      <span className={style.checkbox}></span>
      <span className={style.text}>{label}</span>
    </label>
  );
};
