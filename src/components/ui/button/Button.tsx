import { HashLink } from "react-router-hash-link";

import * as styles from "./Button.css.ts";

type ButtonProps = {
  label: string;
  to: string;
  onClick?: () => void;
};

const Button = ({ label, to, onClick }: ButtonProps) => (
  <HashLink to={`#${to}`} className={styles.button} onClick={onClick}>
    {label}
  </HashLink>
);

export default Button;
