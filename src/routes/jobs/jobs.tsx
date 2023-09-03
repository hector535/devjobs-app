import { useEffect, useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { useNavigate, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { useJobs } from "./useJobs";
import { useViewport } from "@/hooks/useViewport";
import { MobileFilterBar } from "@/components/MobileFilterBar/MobileFilterBar";
import { JobItem } from "@/components/JobItem/JobItem";
import { ListFooter } from "@/components/ListFooter/ListFooter";
import { LoadingMessage } from "@/components/LoadingMessage/LoadingMessage";
import { FilterBar } from "@/components/FilterBar/FilterBar";
import { NoResultsMessage } from "@/components/NoResultsMessage/NoResultsMessage";
import { FilterBarFields } from "@/types/filter_bar";
import { extractFiltersFromURL } from "./utils";
import style from "./jobs.module.scss";

const Jobs = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filters = extractFiltersFromURL(searchParams);

  const [formValues, setFormValues] = useState<FilterBarFields>(filters);

  const { data, isLoading, isLoadingMore, loadMore } = useJobs(formValues);
  const { vw } = useViewport();

  useEffect(() => {
    setFormValues(filters);
  }, [filters.title, filters.location, filters.isFullTime]);

  useEffect(() => {
    const { title, location, isFullTime } = formValues;

    navigate(`?title=${title}&location=${location}&isFullTime=${isFullTime}`);
  }, [formValues]);

  return (
    <main className={clsx("container", style.main)}>
      {vw < 768 && (
        <MobileFilterBar
          className={style.main_filter_bar}
          defaultValues={formValues}
          onSubmit={setFormValues}
        />
      )}

      {vw >= 768 && (
        <FilterBar
          defaultValues={formValues}
          className={style.main_filter_bar}
          onSubmit={setFormValues}
        />
      )}

      {isLoading && <LoadingMessage />}

      {!isLoading && data.length === 0 && <NoResultsMessage />}

      {!isLoading && !!data.length && (
        <VirtuosoGrid
          context={{ loadMore, isLoadingMore }}
          listClassName={style.virtuoso_grid}
          data={data}
          overscan={8}
          itemContent={(_, data) => (
            <JobItem
              key={data.id}
              job={data}
              onClick={() => navigate(`/jobs/${data.id}`)}
            />
          )}
          components={{ Footer: ListFooter }}
        />
      )}
    </main>
  );
};

export default Jobs;
