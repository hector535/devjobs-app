import clsx from "clsx";
import { FilterBar } from "@/components/FilterBar/FilterBar";
import jobs from "@/data/jobs.json";
import style from "./jobs.module.scss";
import { JobItem } from "@/components/JobItem/JobItem";

export const Jobs = () => {
  return (
    <main className={clsx("container", style.main)}>
      <FilterBar className={style.main_filter_bar} />
      {jobs.map((job) => (
        <JobItem job={job} />
      ))}
    </main>
  );
};
