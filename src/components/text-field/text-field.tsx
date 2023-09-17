import clsx from "clsx";
import { type TextFieldProps } from "./text-field.types";
import style from "./text-field.module.scss";

export const TextField = (props: TextFieldProps) => {
  const { icon, className, ...restProps } = props;

  return (
    <div className={clsx(style.text_field_container, className)}>
      {!!icon && icon}
      <input type="text" className={style.text_field} {...restProps} />
    </div>
  );
};
