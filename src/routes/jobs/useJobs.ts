import { useEffect, useState } from "react";
import { getJobs } from "@/api/jobs";
import { IJob } from "@/types/job";
import { FilterBarFields } from "@/types/filter_bar";

export const useJobs = ({ title, location, isFullTime }: FilterBarFields) => {
  const [data, setData] = useState<IJob[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const init = async (title: string, location: string, isFullTime: boolean) => {
    setIsLoading(true);
    const result = await getJobs(title, location, isFullTime);
    setData(result);
    setIsLoading(false);
  };

  const loadMore = async () => {
    setIsLoadingMore(true);
    const result = await getJobs(title, location, isFullTime, 20, data.length);
    setData([...data, ...result]);
    setIsLoadingMore(false);
  };

  useEffect(() => {
    init(title, location, isFullTime);
  }, [title, location, isFullTime]);

  return {
    data,
    isLoading,
    isLoadingMore,
    loadMore,
  };
};
