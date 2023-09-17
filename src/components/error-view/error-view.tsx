import clsx from "clsx";
import { type ErrorViewProps } from "./error-view.types";
import style from "./error-view.module.scss";

export const ErrorView = (props: ErrorViewProps) => {
  const { fullscreen, resetErrorBoundary } = props;
  return (
    <div
      className={clsx(style.error_container, {
        [style.fullscreen]: !!fullscreen,
      })}
    >
      <h1>500</h1>
      <h2>🔥Internal Server Error🔥</h2>
      <p>Sorry, something went wrong :(</p>
      <button onClick={resetErrorBoundary}>Refresh</button>
    </div>
  );
};
