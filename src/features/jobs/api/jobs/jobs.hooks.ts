import { useMutation, useQuery } from "react-query";
import { getJobById, getJobs } from "./jobs";
import { type GetJobsParams } from "./jobs.types";
import { IJob } from "@/types";

export const useGetJobs = (params: GetJobsParams) => {
  return useQuery(["jobs", params], () => getJobs(params));
};

export const useGetJobById = (id: number) => {
  const { data, ...rest } = useQuery(["jobs", id], () => getJobById(id), {
    suspense: true,
  });

  return {
    job: data ?? ({} as IJob),
    ...rest,
  };
};

export const useLoadMoreJobs = () => {
  return useMutation(getJobs);
};
