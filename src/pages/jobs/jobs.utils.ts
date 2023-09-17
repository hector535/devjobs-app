import { convertStringToBoolean } from "@/utils";

export const extractFiltersFromURL = (searchParams: URLSearchParams) => {
  const title = searchParams.get("title") || "";
  const location = searchParams.get("location") || "";
  const isFullTime = searchParams.get("isFullTime") || "false";

  return {
    title,
    location,
    isFullTime: convertStringToBoolean(isFullTime),
  };
};
