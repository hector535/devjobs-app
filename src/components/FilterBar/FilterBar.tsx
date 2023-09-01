import { useState } from "react";
import clsx from "clsx";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Icon } from "../Icon/Icon";
import { TextField } from "../TextField/TextField";
import { FilterBarProps } from "./types";
import style from "./FilterBar.module.scss";

export const FilterBar = (props: FilterBarProps) => {
  const { className, defaultValues, onSubmit } = props;

  const [title, setTitle] = useState(defaultValues.title);
  const [location, setLocation] = useState(defaultValues.location);
  const [isFullTime, setIsFullTime] = useState(defaultValues.isFullTime);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({ title, location, isFullTime });
  };

  return (
    <form
      className={clsx(style.filter_bar_container, className)}
      onSubmit={handleSubmit}
    >
      <TextField
        icon={<Icon name="search" />}
        placeholder="Filter by title..."
        className={style.title_field}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <hr className={style.separator} />

      <TextField
        icon={<Icon name="location" />}
        placeholder="Filter by location..."
        className={style.location_field}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <hr className={style.separator} />

      <Checkbox
        label="Full Time"
        className={style.checkbox_field}
        checked={isFullTime}
        onChange={setIsFullTime}
      />

      <Button className={style.button}> Search </Button>
    </form>
  );
};
