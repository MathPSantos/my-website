import { Span } from "../../../../Typography/index";

import { Container } from "./styles";

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
    <Container>
      <p>
        {position} <Span>@</Span>
        {href ? (
          <a href={href} target="_blank">
            {company}
          </a>
        ) : (
          `${company}`
        )}
      </p>
      <span>
        {initialYear} - {current ? "Momento" : finalYear}
      </span>
    </Container>
  );
}
