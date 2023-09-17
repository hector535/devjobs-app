import clsx from "clsx";
import { Button } from "@/components";
import { CompanyLogo } from "@/features/jobs";
import { type CompanyDetailsProps } from "./company-details.types";
import style from "./company-details.module.scss";

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
          <p className={style.site}>{site}</p>
        </div>

        <Button as="a" href={site} variant="secondary">
          Company Site
        </Button>
      </div>
    </section>
  );
};
