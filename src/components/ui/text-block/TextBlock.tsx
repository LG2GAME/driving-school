import { ReactNode } from "react";

import * as styles from "./textBlock.css";

type TextBlockProps = {
  header: ReactNode;
  description: string;
  as?: "h1" | "h2" | "h3" | "h4";
};

const TextBlock = ({ header, description, as: Tag = "h2" }: TextBlockProps) => (
  <>
    <Tag className={styles.header}>{header}</Tag>
    <p className={styles.description}>{description}</p>
  </>
);

export default TextBlock;
