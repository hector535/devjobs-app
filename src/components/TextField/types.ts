export type TextFieldProps = {
  icon?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<"input">, "type">;
