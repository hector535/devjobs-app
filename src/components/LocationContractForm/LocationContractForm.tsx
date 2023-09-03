import { useEffect, useState } from "react";
import { TextField } from "@/components/TextField/TextField";
import { Icon } from "@/components/Icon/Icon";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Button } from "@/components/Button/Button";
import { LocationContractFormProps } from "./types";
import style from "./LocationContractForm.module.scss";

export const LocationContractForm = (props: LocationContractFormProps) => {
  const { fieldValues, onSubmit } = props;

  const [location, setLocation] = useState(fieldValues.location);
  const [isFullTime, setIsFullTime] = useState(fieldValues.isFullTime);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ location, isFullTime });
  };

  useEffect(() => {
    setLocation(fieldValues.location);
    setIsFullTime(fieldValues.isFullTime);
  }, [fieldValues]);

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <TextField
        icon={<Icon name="location" />}
        placeholder="Filter by location..."
        className={style.location_field}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <hr className={style.separator} />

      <Checkbox
        label="Full Time Only"
        checked={isFullTime}
        onChange={setIsFullTime}
      />

      <Button>Search</Button>
    </form>
  );
};
