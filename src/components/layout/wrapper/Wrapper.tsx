import { ReactNode } from "react";

import * as styles from "./wrapper.css";

type WrapperProps = {
  children: ReactNode;
  direction?: "row" | "column" | "rowRev" | "columnRev";
};

const Wrapper = ({ children, direction = "row" }: WrapperProps) => (
  <section className={styles.wrapper({ direction })}>{children}</section>
);

export default Wrapper;
