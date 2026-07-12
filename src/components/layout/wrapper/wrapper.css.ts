import { vars, mq } from '@styles/theme.css'
import { recipe } from '@vanilla-extract/recipes'

export const wrapper = recipe({
  base: {
    padding: vars.space.margin.lg,
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    gap: vars.space.gap.xl,

    ':first-of-type': {
      minHeight: '87.97vh'
    },

    '@media': {
      [mq.lg]: {
        minHeight: '100%'
      }
    }
  },
  variants: {
    direction: {
      column: { flexDirection: 'column' },
      columnRev: { flexDirection: 'column-reverse' },
      row: { flexDirection: 'row' },
      rowRev: { flexDirection: 'row-reverse' }
    }
  }
})
