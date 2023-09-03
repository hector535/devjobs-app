import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";
import { TextField } from "@/components/TextField/TextField";
import { Modal } from "@/components/Modal/Modal";
import { LocationContractForm } from "@/components/LocationContractForm/LocationContractForm";
import { MobileFilterBarProps } from "./types";
import { FilterBarFields } from "@/types/filter_bar";
import style from "./MobileFilterBar.module.scss";

export const MobileFilterBar = (props: MobileFilterBarProps) => {
  const { className, defaultValues, onSubmit } = props;
  const [openModal, setOpenModal] = useState(false);

  const [formValues, setFormValues] = useState<FilterBarFields>(defaultValues);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  useEffect(() => {
    setFormValues(defaultValues);
  }, [defaultValues]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={clsx(style.filter_bar_container, className)}
      >
        <TextField
          placeholder="Filter by title..."
          value={formValues.title}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
        />
        <Button
          variant="ghost"
          icon={<Icon name="filter" className={style.filter} />}
          type="button"
          onClick={() => setOpenModal(true)}
        />
        <Button
          icon={
            <Icon
              name="search"
              viewBox="0 0 24 24"
              className={style.search_icon}
            />
          }
        />
      </form>
      <Modal open={openModal} onClickOutside={() => setOpenModal(false)}>
        <LocationContractForm
          fieldValues={formValues}
          onSubmit={(fieldValues) => {
            const newValues = { ...formValues, ...fieldValues };
            setFormValues(newValues);
            setOpenModal(false);
            onSubmit(newValues);
          }}
        />
      </Modal>
    </>
  );
};
