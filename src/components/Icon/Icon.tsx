import { ReactComponent as CheckIcon } from "@/assets/desktop/icon-check.svg";
import { ReactComponent as LocationIcon } from "@/assets/desktop/icon-location.svg";
import { ReactComponent as MoonIcon } from "@/assets/desktop/icon-moon.svg";
import { ReactComponent as SearchIcon } from "@/assets/desktop/icon-search.svg";
import { ReactComponent as SunIcon } from "@/assets/desktop/icon-sun.svg";
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
