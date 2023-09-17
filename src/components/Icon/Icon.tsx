import { ReactComponent as CheckIcon } from "@/assets/icons/icon-check.svg";
import { ReactComponent as LocationIcon } from "@/assets/icons/icon-location.svg";
import { ReactComponent as MoonIcon } from "@/assets/icons/icon-moon.svg";
import { ReactComponent as SearchIcon } from "@/assets/icons/icon-search.svg";
import { ReactComponent as SunIcon } from "@/assets/icons/icon-sun.svg";
import { ReactComponent as FilterIcon } from "@/assets/icons/icon-filter.svg";
import { type IconProps } from "./icon.types";

export const Icon = (props: IconProps) => {
  const { name, ...restProps } = props;

  switch (name) {
    case "check":
      return <CheckIcon {...restProps} />;
    case "location":
      return <LocationIcon {...restProps} />;
    case "moon":
      return <MoonIcon {...restProps} />;
    case "search":
      return <SearchIcon {...restProps} />;
    case "sun":
      return <SunIcon {...restProps} />;
    case "filter":
      return <FilterIcon {...restProps} />;
    default:
      return null;
  }
};
