import clsx from "clsx";
import { type ButtonProps } from "./types";
import style from "./Button.module.scss";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    icon,
    loading,
    disabled,
    children,
    className,
    ...restProps
  } = props;

  return (
    <button
      className={clsx(
        style.btn,
        style[variant],
        { [style.loading]: loading },
        { [style.icon]: !!icon },
        className
      )}
      disabled={loading || disabled}
      {...restProps}
    >
      {!!icon && icon}
      {loading && <LoadingSpinner />}
      {children}
    </button>
  );
};
