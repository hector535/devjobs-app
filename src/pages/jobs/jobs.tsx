import { useEffect, useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { useNavigate, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { JobItem, ListFooter, FilterBar } from "@/features/jobs";
import { LoadingMessage, NoResultsMessage } from "@/components";
import { useGetJobs, useLoadMoreJobs } from "@/features/jobs/api";
import { extractFiltersFromURL } from "./jobs.utils";
import { IJob, type FilterBarFields } from "@/types";
import style from "./jobs.module.scss";

const Jobs = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filters = extractFiltersFromURL(searchParams);

  const { data: jobs, isLoading } = useGetJobs(filters);
  const {
    data: loadedJobs,
    mutate: loadMore,
    isLoading: isLoadingMore,
  } = useLoadMoreJobs();

  const [allJobs, setAllJobs] = useState<IJob[]>([]);

  useEffect(() => {
    if (!jobs) return;

    setAllJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    if (!loadedJobs) return;

    setAllJobs([...allJobs, ...loadedJobs]);
  }, [loadedJobs]);

  const handleSubmit = (filterValues: FilterBarFields) => {
    const { title, location, isFullTime } = filterValues;

    navigate(`?title=${title}&location=${location}&isFullTime=${isFullTime}`);
  };

  return (
    <main className={clsx("container", style.main)}>
      <FilterBar
        isSearching={isLoading}
        defaultValues={filters}
        className={style.main_filter_bar}
        onSubmit={handleSubmit}
      />

      {isLoading && <LoadingMessage />}

      {!isLoading && jobs?.length === 0 && <NoResultsMessage />}

      {!isLoading && !!allJobs.length && (
        <VirtuosoGrid
          context={{
            loadMore: () => loadMore({ ...filters, skip: allJobs.length }),
            isLoadingMore,
          }}
          listClassName={style.virtuoso_grid}
          data={allJobs}
          overscan={8}
          itemContent={(_, job) => (
            <JobItem
              key={job.id}
              job={job}
              onClick={() => navigate(`/jobs/${job.id}`)}
            />
          )}
          components={{ Footer: ListFooter }}
        />
      )}
    </main>
  );
};

export default Jobs;
