import { Logo } from "@/types";

export type LogoProps = {
  name: Logo;
} & React.ComponentPropsWithoutRef<"svg">;
