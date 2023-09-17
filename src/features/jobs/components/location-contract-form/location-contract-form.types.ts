import { FilterBarFields } from "@/types";

type PartialFilterBarFields = Omit<FilterBarFields, "title">;

export type LocationContractFormProps = {
  defaultValues: PartialFilterBarFields;
  onSubmit: (results: PartialFilterBarFields) => void;
};
