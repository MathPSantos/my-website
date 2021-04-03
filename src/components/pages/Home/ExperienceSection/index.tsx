import { useState } from "react";

import { ExperienceItem } from "./ExperienceItem";

import { Content, List } from "./styles";

import { data } from "../../../../../data/experience.json";

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
    <Content>
      <List>
        {experiences.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </List>
    </Content>
  );
}
