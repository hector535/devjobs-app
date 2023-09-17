type ButtonProps = { as?: "button" } & React.ComponentPropsWithoutRef<"button">;
type AnchorProps = { as?: "a" } & React.ComponentPropsWithoutRef<"a">;

export type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
} & (ButtonProps | AnchorProps);
