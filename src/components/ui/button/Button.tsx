import { HashLink } from 'react-router-hash-link'

import * as styles from './button.css.ts'

type ButtonProps = {
  label: string
  to?: string
  onClick?: () => void
}

const Button = ({ label, to, onClick }: ButtonProps) => {
  if (to) {
    return (
      <HashLink to={to} className={styles.button} onClick={onClick}>
        {label}
      </HashLink>
    )
  }
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
