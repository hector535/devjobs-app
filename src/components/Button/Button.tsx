import React from "react";
import clsx from "clsx";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { type BaseProps } from "./types";
import style from "./Button.module.scss";

export const Button = (props: BaseProps) => {
  const {
    as = "button",
    variant = "primary",
    icon,
    loading,
    disabled,
    children,
    className,
    ...restProps
  } = props;

  return React.createElement(
    as,
    {
      className: clsx(
        style.btn,
        style[variant],
        { [style.loading]: loading },
        { [style.icon]: !!icon },
        className
      ),
      disabled: loading || disabled,
      ...restProps,
    },
    <>
      {!!icon && icon}
      {loading && <LoadingSpinner />}
      {children}
    </>
  );
};
