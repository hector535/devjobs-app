import { useEffect, useState } from "react";
import { getJobs } from "@/api/jobs";
import { IJob } from "@/types/job";

export const useJobs = (title: string, location: string) => {
  const [data, setData] = useState<IJob[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const init = async (title: string, location: string) => {
    setIsLoading(true);
    const result = await getJobs(title, location);
    setData(result);
    setIsLoading(false);
  };

  const loadMore = async () => {
    setIsLoadingMore(true);
    const result = await getJobs(title, location, 20, data.length);
    setData([...data, ...result]);
    setIsLoadingMore(false);
  };

  useEffect(() => {
    init(title, location);
  }, [title, location]);

  return {
    data,
    isLoading,
    isLoadingMore,
    loadMore,
  };
};
