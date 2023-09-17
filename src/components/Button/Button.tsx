import React from "react";
import clsx from "clsx";
import { LoadingSpinner } from "@/components";
import { type BaseProps } from "./button.types";
import style from "./button.module.scss";

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
      {loading && <LoadingSpinner />}
      {!!icon && icon}
      {children}
    </>
  );
};
