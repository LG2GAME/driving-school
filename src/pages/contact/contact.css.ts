import { mq, vars } from '@styles/theme.css'
import { style } from '@vanilla-extract/css'

export const contactWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.space.gap.xl,
  padding: vars.space.margin.lg,

  '@media': {
    [mq.lg]: {
      flexDirection: 'column'
    }
  }
})

export const contactContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.gap.lg
})

export const contactHeading = style({
  fontSize: vars.fs.md,
  fontWeight: vars.fw.medium
})

export const contactPhoneNumber = style({
  fontSize: vars.fs.lg,
  fontWeight: vars.fw.bold,
  transition: vars.transition.base
})
