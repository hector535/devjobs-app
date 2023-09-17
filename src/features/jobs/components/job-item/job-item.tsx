import { CompanyLogo } from "@/features/jobs";
import { type Logo } from "@/types";
import { type JobItemProps } from "./job-item.types";
import style from "./job-item.module.scss";

export const JobItem = (props: JobItemProps) => {
  const { job, onClick } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code !== "Enter" && e.code !== "Space") return;

    onClick();
  };

  return (
    <div
      tabIndex={0}
      className={style.job_item_container}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <CompanyLogo
        bgColor={job.logoBackground}
        logo={job.logo as Logo}
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
