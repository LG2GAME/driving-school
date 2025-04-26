import { HashLink } from "react-router-hash-link";

type ButtonProps = {
  label: string;
  to: string;
  onClick?: () => void;
};

const Button = ({ label, to, onClick }: ButtonProps) => (
  <HashLink to={`#${to}`} className="btn" onClick={onClick}>
    {label}
  </HashLink>
);

export default Button;
