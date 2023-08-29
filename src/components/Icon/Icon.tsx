import { ReactComponent as CheckIcon } from "@/assets/icon-check.svg";
import { ReactComponent as LocationIcon } from "@/assets/icon-location.svg";
import { ReactComponent as MoonIcon } from "@/assets/icon-moon.svg";
import { ReactComponent as SearchIcon } from "@/assets/icon-search.svg";
import { ReactComponent as SunIcon } from "@/assets/icon-sun.svg";
import { type IconProps } from "./types";

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
    default:
      return null;
  }
};
