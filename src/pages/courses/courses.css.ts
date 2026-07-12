import { mq, vars } from '@styles/theme.css'
import { style } from '@vanilla-extract/css'

export const offerDetails = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.gap.xl
})

export const offerArrow = style({
  cursor: 'pointer',
  appearance: 'none',
  background: 'transparent',
  border: 0,
  transition: vars.transition.base,

  selectors: {
    '&:hover': {
      scale: vars.scale.md
    }
  }
})

export const offerHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.gap.md,

  '@media': {
    [mq.xs]: {
      flexDirection: 'column',
      alignItems: 'start'
    }
  }
})

export const offerTitle = style({
  fontSize: vars.fs.xl
})

export const offerDescription = style({
  fontSize: vars.fs.xs
})

export const offerList = style({
  fontSize: vars.fs.xs,
  listStyleType: 'disc',
  paddingLeft: 30
})

export const offerPrice = style({
  fontSize: vars.fs.xs,
  fontWeight: vars.fw.bold
})
