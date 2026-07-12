import { ReactNode } from 'react'
import * as styles from './card.css'

type CardProps = {
  children: ReactNode
  variant?: 'centered' | 'contact'
  stepSpacing?: number
}

const Card = ({ children, variant, stepSpacing = 0 }: CardProps) => (
  <article
    className={styles.card({ variant: variant })}
    style={{ '--step-spacing': `${stepSpacing}px` } as React.CSSProperties}
  >
    {children}
  </article>
)

export default Card
