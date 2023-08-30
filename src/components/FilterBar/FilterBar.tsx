import clsx from "clsx";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { TextField } from "../TextField/TextField";
import { useViewport } from "@/hooks/useViewport";
import { FilterBarProps } from "./types";
import style from "./FilterBar.module.scss";

export const FilterBar = (props: FilterBarProps) => {
  const { className } = props;
  const { vw } = useViewport();
  const showIcon = vw > 346;
  const showText = !showIcon;

  return (
    <div className={clsx(style.filter_bar_container, className)}>
      <TextField className={style.textfield} placeholder="Filter by title..." />
      <Icon name="filter" className={style.filter} />
      <Button
        icon={
          showIcon && (
            <Icon
              name="search"
              viewBox="0 0 24 24"
              className={style.search_icon}
            />
          )
        }
        className={style.button}
      >
        {showText && "Buscar"}
      </Button>
    </div>
  );
};
