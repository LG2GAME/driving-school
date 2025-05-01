import { ReactNode } from "react";

import * as styles from "./contentWrapper.css";

type ContentWrapperProps = {
  children: ReactNode;
  variant?: "content" | "grid";
  direction?: "column" | "row";
};

const ContentWrapper = ({
  children,
  variant = "content",
  direction = "column",
}: ContentWrapperProps) => (
  <div
    className={styles.contentWrapper({
      wrapper: variant,
      direction: direction,
    })}
  >
    {children}
  </div>
);

export default ContentWrapper;
