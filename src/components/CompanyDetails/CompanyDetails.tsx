import clsx from "clsx";
import { Button } from "../Button/Button";
import { CompanyLogo } from "../CompanyLogo/CompanyLogo";
import { CompanyDetailsProps } from "./types";
import style from "./CompanyDetails.module.scss";

export const CompanyDetails = (props: CompanyDetailsProps) => {
  const { className, logo, company, logoBgColor, site } = props;

  return (
    <section className={clsx(style.company_container, className)}>
      <CompanyLogo
        className={style.company_details_logo}
        logo={logo}
        bgColor={logoBgColor}
      />

      <div className={style.info_container}>
        <div className={style.heading_container}>
          <h1 className={style.company_name}>{company}</h1>
          <p>{site}</p>
        </div>

        <Button as="a" href={site} variant="secondary">
          Company Site
        </Button>
      </div>
    </section>
  );
};
