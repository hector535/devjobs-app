import { type JobItemProps } from "./types";
import style from "./JobItem.module.scss";

export const JobItem = (props: JobItemProps) => {
  const { job } = props;

  return (
    <div className={style.job_item_container}>
      <div
        className={style.company_logo_container}
        style={{ background: job.logoBackground }}
      >
        <img src="/logos/scoot.svg" alt="Company logo" />
      </div>

      <div className={style.sub_container}>
        <p>
          {job.postedAt} . {job.contract} . ID: {job.id}
        </p>
        <h2 className={style.title}>{job.position}</h2>
        <p>{job.company}</p>
      </div>

      <p className={style.location}>{job.location}</p>
    </div>
  );
};
