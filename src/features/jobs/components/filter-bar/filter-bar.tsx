import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button, Checkbox, Icon, TextField, Modal } from "@/components";
import { LocationContractForm } from "@/features/jobs";
import { type FilterBarProps } from "./filter-bar.types";
import style from "./filter-bar.module.scss";

export const FilterBar = (props: FilterBarProps) => {
  const { className, defaultValues, isSearching, onSubmit } = props;

  const [filters, setFilters] = useState(defaultValues);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setFilters(defaultValues);
  }, [defaultValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setFilters({
      ...filters,
      [name]: name === "isFullTime" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ ...filters, isFullTime: filters.isFullTime });
  };

  return (
    <>
      <form
        className={clsx(style.filter_bar_container, className)}
        onSubmit={handleSubmit}
      >
        <TextField
          name="title"
          value={filters.title}
          icon={<Icon name="search" />}
          className={style.title_field}
          placeholder="Filter by title..."
          onChange={handleChange}
        />

        {/* Only visible in mobile */}
        <Button
          type="button"
          variant="ghost"
          icon={<Icon name="filter" />}
          className={style.filter_icon_btn}
          onClick={() => setShowModal(true)}
        />

        <hr className={style.separator} />

        <TextField
          name="location"
          value={filters.location}
          icon={<Icon name="location" />}
          className={style.location_field}
          placeholder="Filter by location..."
          onChange={handleChange}
        />

        <hr className={style.separator} />

        <Checkbox
          name="isFullTime"
          label="Full Time"
          checked={filters.isFullTime}
          className={style.checkbox_field}
          onChange={handleChange}
        />

        <Button className={style.search_btn} loading={isSearching}>
          Search
        </Button>

        {/* Only visible in mobile */}
        <Button
          disabled={isSearching}
          className={style.search_icon_btn}
          icon={<Icon name="search" className={style.search_icon} />}
        />
      </form>
      <Modal open={showModal} onClickOutside={() => setShowModal(false)}>
        <LocationContractForm
          defaultValues={filters}
          onSubmit={(filterValues) => {
            setShowModal(false);
            onSubmit({ ...filters, ...filterValues });
          }}
        />
      </Modal>
    </>
  );
};
