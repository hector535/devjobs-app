import clsx from "clsx";
import { Logo } from "@/components/Logo/Logo";
import { CompanyLogoProps } from "./types";
import style from "./CompanyLogo.module.scss";

export const CompanyLogo = (props: CompanyLogoProps) => {
  const { className, logo, bgColor } = props;

  return (
    <div
      className={clsx(style.logo_container, className)}
      style={{ backgroundColor: bgColor }}
    >
      <Logo name={logo} />
    </div>
  );
};
