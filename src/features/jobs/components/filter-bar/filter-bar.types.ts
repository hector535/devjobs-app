import { FilterBarFields } from "@/types";

export type FilterBarProps = {
  className?: string;
  isSearching: boolean;
  defaultValues: FilterBarFields;
  onSubmit: (values: FilterBarFields) => void;
};
