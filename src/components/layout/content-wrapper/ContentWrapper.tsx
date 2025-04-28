import { ReactNode } from "react";

import * as styles from "./contentWrapper.css";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => (
  <div className={styles.contentWrapper}>{children}</div>
);

export default ContentWrapper;
