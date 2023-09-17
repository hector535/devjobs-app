import { TextField, Icon, Checkbox, Button } from "@/components";
import { type LocationContractFormProps } from "./location-contract-form.types";
import style from "./location-contract-form.module.scss";

export const LocationContractForm = (props: LocationContractFormProps) => {
  const { defaultValues, onSubmit } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const data = {
      location: form.get("location")!.toString(),
      isFullTime: !!form.get("isFullTime"),
    };

    onSubmit(data);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <TextField
        key={defaultValues.location}
        name="location"
        icon={<Icon name="location" />}
        placeholder="Filter by location..."
        className={style.location_field}
        defaultValue={defaultValues.location}
      />

      <hr className={style.separator} />

      <Checkbox
        key={String(defaultValues.isFullTime)}
        name="isFullTime"
        label="Full Time Only"
        defaultChecked={defaultValues.isFullTime}
      />

      <Button>Search</Button>
    </form>
  );
};
