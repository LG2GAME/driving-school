import { ContentWrapper, Wrapper } from "@components/layout";

import { useMediaQuery } from "@hooks/useMediaQuery";

import { icons } from "@assets/icons/icons";
import { images } from "@assets/images/images";
import { mq } from "@styles/theme.css";
import * as styles from "./hero.css";

const Hero = () => {
  const isDesktop: boolean = !useMediaQuery(mq.lg);

  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <h2 className={styles.header}>
            Czas usiąść {isDesktop ? <br /> : null} za kierownicą!
          </h2>
          <p className={styles.description}>
            Przestań marzyć o wolności – zapisz się na kurs i zdobądź pewność
            oraz umiejętności, by cieszyć się jazdą!
          </p>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <img src={icons.indivIco} alt="" />
              Indywidualne podejście
            </li>
            <li className={styles.featureItem}>
              <img src={icons.instrIco} alt="" />
              Doświadczeni instruktorzy
            </li>
            <li className={styles.featureItem}>
              <img src={icons.carIco} alt="" />
              Nowoczesna flota pojazdów
            </li>
          </ul>
        </ContentWrapper>
        <div className={styles.imageWrapper}>
          <img src={images.drvImg} alt="" className={styles.image} />
        </div>
      </Wrapper>
    </>
  );
};

export default Hero;
