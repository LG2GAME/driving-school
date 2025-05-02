import { ContentWrapper, Wrapper } from "@components/layout";
import { Card, TextBlock } from "@components/ui";

import { useMediaQuery } from "@hooks/useMediaQuery";

import { programData } from "@assets/data";
import { mq } from "@styles/theme.css";
import * as styles from "./program.css";

interface ProgramStepInterface {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const Program = () => {
  const isDesktop: boolean = !useMediaQuery(mq.lg);

  return (
    <Wrapper direction="column">
      <ContentWrapper>
        <TextBlock
          header="Plan szkoleniowy"
          description="Każdy krok przybliży Cię do sukcesu za kierownicą – zobacz, jak wygląda Twój kurs."
        />
      </ContentWrapper>
      <ContentWrapper direction={isDesktop ? "rowEnd" : "column"}>
        {programData.map(
          ({ id, icon, title, description }: ProgramStepInterface) => (
            <Card
              variant="centered"
              stepSpacing={isDesktop ? (id - 1) * 45 : undefined}
            >
              <img src={icon} alt="" aria-hidden="true" />
              <h3 className={styles.programTitle}>{title}</h3>
              <p className={styles.programDescription}>{description}</p>
            </Card>
          )
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Program;
