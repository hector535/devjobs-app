import { ReactComponent as SadFaceSVG } from "@/assets/misc/sad-face.svg";
import style from "./NoResultsMessage.module.scss";

export const NoResultsMessage = () => {
  return (
    <div className={style.no_results_message_container}>
      <SadFaceSVG />
      <h1>Sorry, we couldn't find any results</h1>
    </div>
  );
};
