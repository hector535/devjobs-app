import jobs from "@/data/jobs.json";
import { IJob } from "@/types/job";

const delay = 1500;

export const getJobs = async (
  title: string,
  location: string,
  isFullTime: boolean,
  limit: number = 20,
  skip: number = 0
): Promise<IJob[]> => {
  await new Promise((resolve) => setTimeout(resolve, delay));

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
