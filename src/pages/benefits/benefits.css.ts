import { vars, mq } from '@styles/theme.css'
import { style } from '@vanilla-extract/css'

export const cardHeaderWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.gap.md,

  '@media': {
    [mq.xs]: {
      flexDirection: 'column',
      alignItems: 'start',
      gap: vars.space.gap.xs
    }
  }
})

export const cardIndex = style({
  fontSize: vars.fs.lg,
  color: vars.colors.blue,
  fontWeight: vars.fw.bold
})

export const cardTitle = style({
  fontSize: vars.fs.md,
  fontWeight: vars.fw.bold
})

export const cardText = style({
  fontSize: vars.fs.xxs,
  fontWeight: vars.fw.medium
})

export const image = style({
  borderRadius: vars.radius.xs,
  aspectRatio: '3 / 2',
  width: '100%',

  '@media': {
    [mq.lg]: {
      width: '70%',
      margin: '0 auto'
    },
    [mq.md]: {
      width: '80%'
    },
    [mq.xs]: {
      width: '100%'
    }
  }
})
