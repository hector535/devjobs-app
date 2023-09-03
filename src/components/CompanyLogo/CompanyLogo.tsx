import clsx from "clsx";
import { CompanyLogoProps } from "./types";
import style from "./CompanyLogo.module.scss";

export const CompanyLogo = (props: CompanyLogoProps) => {
  const { className, url, bgColor } = props;

  return (
    <div
      className={clsx(style.logo_container, className)}
      style={{ backgroundColor: bgColor }}
    >
      <img src={url} alt="Company logo" />
    </div>
  );
};
