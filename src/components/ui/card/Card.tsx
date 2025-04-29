import { ReactNode } from "react";

import * as styles from "./card.css";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => (
  <div className={styles.card}>{children}</div>
);

export default Card;
