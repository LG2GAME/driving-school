import { ContentWrapper } from "@components/layout";

import { InstructorInterface } from "../Team";

import { instructorsData } from "@assets/data";
import * as styles from "../team.css";

const MobileTeam = () => (
  <ContentWrapper>
    {instructorsData.map(
      ({ id, image, name, role, description }: InstructorInterface) => {
        const isReverse = id % 2 === 0;

        return (
          <article
            key={id}
            className={styles.teamMemberCard({ reverse: isReverse })}
          >
            <img
              src={image}
              alt=""
              className={styles.cardImage({ reverse: isReverse })}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardName}>{name}</h3>
              <p className={styles.cardRole}>{role}</p>
              <p className={styles.cardDescription}>{description}</p>
            </div>
          </article>
        );
      }
    )}
  </ContentWrapper>
);

export default MobileTeam;
