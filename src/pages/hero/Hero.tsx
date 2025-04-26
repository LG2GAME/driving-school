import { Container, ContentSection, TextSection } from "@components/layout";

import { icons } from "@assets/icons/icons";
import { images } from "@assets/images/images";
import "./Hero.scss";

const Hero = () => (
  <Container>
    <ContentSection>
      <TextSection
        title="Czas usiąść za kierownicą!"
        description="Przestań marzyć o wolności – zapisz się na kurs i zdobądź pewność oraz
        umiejętności, by cieszyć się jazdą!"
      />
      <ul className="hero__list">
        <li>
          <img src={icons.indivIco} alt="" />
          <p className="info-text">Indywidualne podejście</p>
        </li>
        <li>
          <img src={icons.instrIco} alt="" />
          <p className="info-text">Doświadczeni instruktorzy</p>
        </li>
        <li>
          <img src={icons.carIco} alt="" />
          <p className="info-text">Nowoczesna flota pojazdów</p>
        </li>
      </ul>
    </ContentSection>
    <img
      className="hero__drv-image"
      src={images.drvImg}
      alt="Zdjęcie kierowcy"
    />
  </Container>
);

export default Hero;
