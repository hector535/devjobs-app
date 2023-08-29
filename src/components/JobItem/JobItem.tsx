import { type JobItemProps } from "./types";
import companyLogo from "@/assets/logos/scoot.svg";
import style from "./JobItem.module.scss";
import jobs from "@/data/jobs.json";

export const JobItem = (props: JobItemProps) => {
  const { job } = props;
  const item = jobs[0];

  return (
    <div className={style.job_item_container}>
      <div
        className={style.company_logo_container}
        style={{ background: item.logoBackground }}
      >
        <img src={companyLogo} alt="Company logo" />
      </div>

      <div className={style.sub_container}>
        <p>
          {item.postedAt} . {item.contract}
        </p>
        <h2 className={style.title}>{item.position}</h2>
        <p>{item.company}</p>
      </div>

      <p className={style.location}>{item.location}</p>
    </div>
  );
};
