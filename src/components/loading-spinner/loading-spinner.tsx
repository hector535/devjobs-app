import clsx from "clsx";
import { type LoadingSpinnerProps } from "./loading-spinner.types";
import style from "./loading-spinner.module.scss";

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { size = "medium" } = props;
  return <div className={clsx(style.spinner, style[size])}></div>;
};
