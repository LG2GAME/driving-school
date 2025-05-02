import { Card, TextBlock } from "@components/ui";

import { useMediaQuery } from "@hooks/useMediaQuery";

import * as styles from "./Contact.css";
import { mq } from "@styles/theme.css";
import { ContentWrapper } from "@components/layout";
import { icons } from "@assets/icons/icons";

const Contact = () => {
  const isDesktop: boolean = !useMediaQuery(mq.lg);

  return (
    <footer className={styles.contactWrapper} id="kontakt">
      <ContentWrapper>
        <TextBlock
          header="Porozmawiajmy o Twojej przyszłości za kierownicą!"
          description={
            <>
              Masz pytania lub chcesz rozpocząć naukę jazdy?
              {isDesktop ? <br /> : null} Zadzwoń lub napisz – chętnie pomożemy!
            </>
          }
        />
      </ContentWrapper>
      <ContentWrapper>
        <div className={styles.contactContainer}>
          <div>
            <h3 className={styles.contactHeading}>Zadzwoń do nas</h3>
            <Card variant="contact">
              <img src={icons.telIco} alt="" width={45} />
              <a href="tel:+123456789" className={styles.contactPhoneNumber}>
                123 456 789
              </a>
            </Card>
          </div>
          <div>
            <h3 className={styles.contactHeading}>
              lub napisz do nas na WhatsApp
            </h3>
            <Card variant="contact">
              <img src={icons.txtIco} alt="" width={45} />
              <a
                href="https://wa.me/123456789"
                className={styles.contactPhoneNumber}
                target="_blank"
              >
                123 456 789
              </a>
            </Card>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Contact;
