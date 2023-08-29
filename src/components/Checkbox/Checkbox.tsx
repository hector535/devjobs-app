import { type CheckboxProps } from "./types";
import style from "./Checkbox.module.scss";

export const Checkbox = (props: CheckboxProps) => {
  const { label, checked = false, onChange } = props;

  return (
    <label className={style.checkbox_container}>
      <input
        className={style.hidden_checkbox}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={style.checkbox}></span>
      {label}
    </label>
  );
};
