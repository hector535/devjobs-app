import clsx from "clsx";
import { LoadingSpinner } from "@/components";
import { type LoadingMessageProps } from "./loading-message.types";
import style from "./loading-message.module.scss";

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
