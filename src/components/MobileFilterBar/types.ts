import { FilterBarFields } from "@/types/filter_bar";

export type MobileFilterBarProps = {
  className?: string;
  defaultValues: FilterBarFields;
  onSubmit: (formValues: FilterBarFields) => void;
};
