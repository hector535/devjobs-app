import { useState, useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { getJobById } from "@/features/jobs";
import { IJob } from "@/types";

export const useJob = (id: number) => {
  const [data, setData] = useState<IJob>();
  const [isLoading, setIsLoading] = useState(true);
  const { showBoundary } = useErrorBoundary();

  const fetchJob = async (id: number) => {
    try {
      setIsLoading(true);

      const job = await getJobById(id);

      setIsLoading(false);
      setData(job);
    } catch (err) {
      showBoundary(err);
    }
  };

  useEffect(() => {
    fetchJob(id);
  }, [id]);

  return { job: data ?? ({} as IJob), isLoading };
};
