import { jobs } from "@/data";
import { IJob } from "@/types";
import { type GetJobsParams } from "./jobs.types";

const delay = 550;

export const getJobs = async (params: GetJobsParams): Promise<IJob[]> => {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const {
    title = "",
    location = "",
    isFullTime = false,
    limit = 20,
    skip = 0,
  } = params;

  if (limit < 0 || skip < 0) return [];

  const contract = isFullTime ? "Full Time" : "Part Time";

  const filteredJobs = jobs.filter(
    (j) =>
      j.position.toLowerCase().includes(title.toLowerCase()) &&
      j.location.toLowerCase().includes(location.toLowerCase()) &&
      j.contract === contract
  );

  return filteredJobs.slice(skip, skip + limit);
};

export const getJobById = async (id: number): Promise<IJob> => {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const selectedJob = jobs.find((j) => j.id === id);

  if (!selectedJob) throw new Error(`The ID: ${id} is invalid`);

  return selectedJob;
};
