import { ReactNode } from "react";

import * as styles from "./contentWrapper.css";

type ContentWrapperProps = {
  children: ReactNode;
  variant?: "content" | "grid";
};

const ContentWrapper = ({
  children,
  variant = "content",
}: ContentWrapperProps) => (
  <div className={styles.contentWrapper({ wrapper: variant })}>{children}</div>
);

export default ContentWrapper;
