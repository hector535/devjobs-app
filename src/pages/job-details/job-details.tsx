import { useParams } from "react-router-dom";
import clsx from "clsx";
import { Button } from "@/components";
import {
  CompanyDetails,
  JobContractDetails,
  useGetJobById,
} from "@/features/jobs";
import { type Logo } from "@/types";
import style from "./job-details.module.scss";

const Job = () => {
  const { id } = useParams();

  const { job } = useGetJobById(+(id || ""));

  return (
    <>
      <main className={style.page_container}>
        <CompanyDetails
          className={style.job_company_details}
          company={job.company}
          logoBgColor={job.logoBackground}
          logo={job.logo as Logo}
          site={job.website}
        />

        <section className={style.main_section}>
          <section className={style.position_apply_container}>
            <div className={style.position_details_container}>
              <JobContractDetails
                contract={job.contract}
                postedAt={job.postedAt}
              />
              <h1 className={style.heading}>{job.position}</h1>
              <p className="location">{job.location}</p>
            </div>

            <Button as="a" href={job.apply} className={style.apply_btn}>
              Apply Now
            </Button>
          </section>

          <section className={style.job_description}>
            <p>{job.description}</p>
          </section>

          <section className={style.requirements}>
            <h2 className={style.sub_heading}>Requirements</h2>

            <p>{job.requirements.content}</p>

            <ul className={style.list}>
              {job.requirements.items.map((item, idx) => (
                <li key={idx} className={style.list_item}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className={style.responsabilities}>
            <h2 className={style.sub_heading}>What you will do</h2>

            <p>{job.role.content}</p>

            <ul className={clsx(style.list, style.list__number)}>
              {job.role.items.map((item, idx) => (
                <li key={idx} className={style.list_item}>
                  <p className={style.list_item__number}>{item}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
      <footer className={style.footer}>
        <div className={style.footer_content}>
          <div className={style.footer_text_container}>
            <h3 className={style.sub_heading}>{job.position}</h3>
            <p>{job.company}</p>
          </div>
          <Button as="a" href={job.apply} className={style.apply_btn}>
            Apply Now
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Job;
