import clsx from "clsx";
import { type ErrorViewProps } from "./error-view.types";
import style from "./error-view.module.scss";
import { useNavigate } from "react-router-dom";

export const ErrorView = (props: ErrorViewProps) => {
  const { fullscreen, resetErrorBoundary } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/jobs");
    resetErrorBoundary();
  };
  return (
    <div
      className={clsx(style.error_container, {
        [style.fullscreen]: !!fullscreen,
      })}
    >
      <h1>500</h1>
      <h2>🔥Internal Server Error🔥</h2>
      <p>Sorry, something went wrong :(</p>
      <button onClick={handleClick}>Go to the main page</button>
    </div>
  );
};
