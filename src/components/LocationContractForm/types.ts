import { LocationContractFormFields } from "@/types/location-contract-form";

export type LocationContractFormProps = {
  fieldValues: LocationContractFormFields;
  onSubmit: (results: LocationContractFormFields) => void;
};
