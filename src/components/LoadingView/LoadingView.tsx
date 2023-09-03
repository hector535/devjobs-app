import clsx from "clsx";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { LoadingViewProps } from "./types";
import style from "./LoadingView.module.scss";

export const LoadingView = (props: LoadingViewProps) => {
  const { text, fullscreen, className } = props;

  return (
    <div
      className={clsx(
        style.loading_container,
        {
          [style.fullscreen]: !!fullscreen,
        },
        className
      )}
    >
      <h1>{text}</h1>
      <LoadingSpinner size="xLarge" />
    </div>
  );
};