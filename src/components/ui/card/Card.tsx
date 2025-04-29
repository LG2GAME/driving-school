import { ReactNode } from "react";

import * as styles from "./card.css";

type CardProps = {
  children: ReactNode;
  isCentered?: boolean;
};

const Card = ({ children, isCentered }: CardProps) => (
  <article className={styles.card({ isCentered: isCentered })}>
    {children}
  </article>
);

export default Card;
