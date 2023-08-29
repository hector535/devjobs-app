export type ButtonProps = {
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;
