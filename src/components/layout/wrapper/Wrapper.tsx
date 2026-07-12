import { ReactNode } from 'react'

import { useFocus } from '@hooks/useFocus'

import * as styles from './wrapper.css'

type WrapperProps = {
  children: ReactNode
  direction?: 'row' | 'column' | 'rowRev' | 'columnRev'
  id?: string
}

const Wrapper = ({ children, direction = 'row', id }: WrapperProps) => {
  const wrapperRef = useFocus(`#${id}`)

  return (
    <section
      className={styles.wrapper({ direction })}
      id={id}
      ref={wrapperRef}
      tabIndex={-1}
    >
      {children}
    </section>
  )
}

export default Wrapper
