import { ContentWrapper, Wrapper } from "@components/layout";
import { TextBlock } from "@components/ui";

import { useMediaQuery } from "@hooks/useMediaQuery";

import { icons } from "@assets/icons/icons";
import { images } from "@assets/images/images";
import { mq } from "@styles/theme.css";
import * as styles from "./hero.css";

const Hero = () => {
  const isDesktop: boolean = !useMediaQuery(mq.lg);

  return (
    <Wrapper id="strona-glowna">
      <ContentWrapper>
        <TextBlock
          header={<>Czas usiąść {isDesktop ? <br /> : null} za kierownicą!</>}
          description="Przestań marzyć o wolności – zapisz się na kurs i zdobądź pewność oraz umiejętności, by cieszyć się jazdą!"
        />
        <ul className={styles.featuresList} role="list">
          <li className={styles.featureItem}>
            <img src={icons.indivIco} alt="" aria-hidden="true" />
            Indywidualne podejście
          </li>
          <li className={styles.featureItem}>
            <img src={icons.instrIco} alt="" aria-hidden="true" />
            Doświadczeni instruktorzy
          </li>
          <li className={styles.featureItem}>
            <img src={icons.carIco} alt="" aria-hidden="true" />
            Nowoczesna flota pojazdów
          </li>
        </ul>
      </ContentWrapper>
      <div className={styles.imageWrapper}>
        <img
          src={images.drvImg}
          alt="Zdjęcie ucznia za kierownicą podczas kursu jazdy"
          className={styles.image}
        />
      </div>
    </Wrapper>
  );
};

export default Hero;
