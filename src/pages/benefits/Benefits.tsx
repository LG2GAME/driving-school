import { ContentWrapper, Wrapper } from "@components/layout";
import { Card, TextBlock } from "@components/ui";

import { useMediaQuery } from "@hooks/useMediaQuery";

import { benefitsData } from "@assets/data/benefitsData";
import { images } from "@assets/images/images";
import { mq } from "@styles/theme.css";
import * as styles from "./benefits.css";

const WhyUs = () => {
  const isDesktop: boolean = !useMediaQuery(mq.lg);

  return (
    <Wrapper direction={isDesktop ? undefined : "columnRev"}>
      <ContentWrapper>
        {benefitsData.map(({ title, text }, index) => (
          <Card>
            <div className={styles.cardHeaderWrapper}>
              <span className={styles.cardIndex}>#{index + 1}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
            </div>
            <p className={styles.cardText}>{text}</p>
          </Card>
        ))}
      </ContentWrapper>
      <ContentWrapper>
        <TextBlock
          header="Dlaczego warto wybrać naszą szkołę?"
          description="W naszej szkole nauczysz się jeździć w przyjaznej atmosferze, z elastycznymi godzinami, nowoczesnymi samochodami i instruktorami, którzy pomogą Ci poczuć się pewnie za kierownicą."
        />
        <img src={images.beneImg} alt="" className={styles.image} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default WhyUs;
