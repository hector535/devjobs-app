import clsx from "clsx";
import { type LoadingSpinnerProps } from "./types";
import style from "./LoadingSpinner.module.scss";

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { size = "medium" } = props;
  return <div className={clsx(style.spinner, style[size])}></div>;
};
