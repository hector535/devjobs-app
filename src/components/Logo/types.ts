import { Logo } from "@/types/logo";

export type LogoProps = {
  name: Logo;
} & React.ComponentPropsWithoutRef<"svg">;
