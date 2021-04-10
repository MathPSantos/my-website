import styled from "./styles.module.scss";

interface ExperienceItemProps {
  position: string;
  company: string;
  href?: string;
  initialYear: number;
  finalYear?: number;
  current?: boolean;
}

export function ExperienceItem({
  position,
  company,
  href,
  initialYear,
  finalYear,
  current = false,
}: ExperienceItemProps) {
  return (
    <li className={styled.experienceItem}>
      <p>
        {position}
        {href ? (
          <a className="foreign" href={href} target="_blank">
            {company}
          </a>
        ) : (
          { company }
        )}
      </p>
      <span>
        {initialYear} - {current ? "Current" : finalYear}
      </span>
    </li>
  );
}
