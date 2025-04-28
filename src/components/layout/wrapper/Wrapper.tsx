import { ReactNode } from "react";

import * as styles from "./wrapper.css";

type WrapperProps = {
  children: ReactNode;
  isColumn?: boolean;
};

const Wrapper = ({ children, isColumn }: WrapperProps) => {
  return (
    <section className={styles.wrapper({ dir: isColumn ? "column" : "row" })}>
      {children}
    </section>
  );
};

export default Wrapper;
