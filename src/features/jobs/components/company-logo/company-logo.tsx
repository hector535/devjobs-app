import clsx from "clsx";
import { Logo } from "@/features/jobs";
import { type CompanyLogoProps } from "./company-logo.types";
import style from "./company-logo.module.scss";

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
