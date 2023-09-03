import { JobContractDetailsProps } from "./types";
import style from "./JobContractDetails.module.scss";

export const JobContractDetails = (props: JobContractDetailsProps) => {
  const { contract, postedAt } = props;

  return (
    <div className={style.contract_details_container}>
      <span>{postedAt}</span>
      <div className={style.circle}></div>
      <span>{contract}</span>
    </div>
  );
};
