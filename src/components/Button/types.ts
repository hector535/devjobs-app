export type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;
