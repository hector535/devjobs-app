import clsx from "clsx";
import { Link } from "react-router-dom";
import { ToggleSwitch } from "@/components/ToggleSwitch/ToggleSwitch";
import { ReactComponent as CompanyLogo } from "@/assets/logos/company.svg";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={clsx("container", style.header_content)}>
        <Link to="/jobs">
          <CompanyLogo />
        </Link>
        <ToggleSwitch />
      </div>
    </header>
  );
};
