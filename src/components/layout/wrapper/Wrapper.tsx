import { ReactNode } from "react";

import * as styles from "./wrapper.css";

type WrapperProps = {
  children: ReactNode;
  direction?: "row" | "column" | "rowRev" | "columnRev";
  id?: string;
};

const Wrapper = ({ children, direction = "row", id }: WrapperProps) => (
  <section className={styles.wrapper({ direction })} id={id}>
    {children}
  </section>
);

export default Wrapper;
