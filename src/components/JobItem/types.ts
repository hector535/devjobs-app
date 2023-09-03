import { IJob } from "@/types/job";

export type JobItemProps = {
  job: IJob;
  onClick: () => void;
};
