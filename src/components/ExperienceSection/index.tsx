import { useState } from "react";

import { ExperienceItem } from "./ExperienceItem";

import styled from "./styles.module.scss";

import { data } from "../../../data/experience.json";

interface ExperiencesData {
  position: string;
  company: string;
  href?: string;
  initialYear: number;
  finalYear?: number;
  current?: boolean;
}

export function ExperienceSection() {
  const [experiences] = useState<ExperiencesData[]>(data);

  return (
    <div className={styled.container}>
      <ul>
        {experiences.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
