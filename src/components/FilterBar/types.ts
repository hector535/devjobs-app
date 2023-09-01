import { FilterBarFields } from "@/types/filter_bar";

export type FilterBarProps = {
  className?: string;
  defaultValues: FilterBarFields;
  onSubmit: (values: FilterBarFields) => void;
};
