import { ReactNode } from 'react'

import * as styles from './contentWrapper.css'

type ContentWrapperProps = {
  children: ReactNode
  variant?: 'content' | 'grid'
  direction?: 'column' | 'row' | 'rowEnd'
}

const ContentWrapper = ({
  children,
  variant = 'content',
  direction = 'column'
}: ContentWrapperProps) => (
  <section
    className={styles.contentWrapper({
      variant: variant,
      direction: direction
    })}
  >
    {children}
  </section>
)

export default ContentWrapper
