import clsx from "clsx";
import { Link } from "react-router-dom";
import { ToggleSwitch } from "@/components";
import { ReactComponent as CompanyLogo } from "@/assets/logos/company.svg";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={clsx("container", style.header_content)}>
        <Link to="/jobs" title="Company site">
          <CompanyLogo />
        </Link>
        <ToggleSwitch />
      </div>
    </header>
  );
};
