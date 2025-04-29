import { ReactNode } from "react";

import * as styles from "./TextBlock.css";

type TextBlockProps = {
  header: ReactNode;
  description: string;
};

const TextBlock = ({ header, description }: TextBlockProps) => (
  <>
    <h2 className={styles.header}>{header}</h2>
    <p className={styles.description}>{description}</p>
  </>
);

export default TextBlock;
