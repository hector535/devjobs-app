import clsx from "clsx";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { LoadingMessageProps } from "./types";
import style from "./LoadingMessage.module.scss";

export const LoadingMessage = (props: LoadingMessageProps) => {
  const { className, fullscreen } = props;

  return (
    <div
      className={clsx(
        style.loading_container,
        { [style.fullscreen]: fullscreen },
        className
      )}
    >
      <h1 className={style.title}>Loading...</h1>
      <LoadingSpinner size="xLarge" />
    </div>
  );
};
