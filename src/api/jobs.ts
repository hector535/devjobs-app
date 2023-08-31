import jobs from "@/data/jobs.json";

const delay = 1500;

export const getJobs = async (
  title: string,
  location: string,
  limit: number = 20,
  skip: number = 0
) => {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const filteredJobs = jobs.filter(
    (j) =>
      j.position.toLowerCase().includes(title.toLowerCase()) &&
      j.location.toLowerCase().includes(location.toLowerCase())
  );

  return filteredJobs.slice(skip, skip + limit);
};

export const getJobById = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const selectedJob = jobs.find((j) => j.id === id);

  if (!selectedJob) throw new Error(`The ID: ${id} is invalid`);

  return selectedJob;
};
