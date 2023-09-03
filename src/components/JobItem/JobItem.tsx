import { CompanyLogo } from "../CompanyLogo/CompanyLogo";
import { type JobItemProps } from "./types";
import style from "./JobItem.module.scss";

export const JobItem = (props: JobItemProps) => {
  const { job, onClick } = props;

  return (
    <div className={style.job_item_container} onClick={onClick}>
      <CompanyLogo
        bgColor={job.logoBackground}
        url={job.logo}
        className={style.job_company_logo}
      />

      <div className={style.sub_container}>
        <p>
          {job.postedAt} . {job.contract} . ID: {job.id}
        </p>
        <h2 className={style.title}>{job.position}</h2>
        <p>{job.company}</p>
      </div>

      <p className="location">{job.location}</p>
    </div>
  );
};
