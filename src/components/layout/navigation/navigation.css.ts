import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars, mq } from '@styles/theme.css'

export const navigation = style({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  padding: vars.space.margin.lg
})

export const burger = style({
  backgroundColor: 'transparent',
  display: 'none',
  flexDirection: 'column',
  gap: vars.space.gap.burger,
  height: 'max-content',
  marginLeft: 'auto',
  width: 25,
  zIndex: 2,

  '@media': {
    [mq.lg]: { display: 'flex' }
  }
})
globalStyle(`${burger} span`, {
  backgroundColor: vars.colors.black,
  borderRadius: vars.radius.xl,
  height: 3
})

export const logo = style({
  textAlign: 'center',
  fontSize: vars.fs.lg,
  fontWeight: vars.fw.bold,
  zIndex: 2
})

export const menu = recipe({
  base: {
    alignItems: 'center',
    display: 'flex',
    gap: vars.space.gap.md,
    marginLeft: 'auto',

    '@media': {
      [mq.lg]: {
        backgroundColor: vars.colors.white,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%'
      }
    }
  },
  variants: {
    open: {
      true: { transform: 'translateX(0)' },
      false: { transform: 'translateX(-105%)' }
    }
  }
})

export const menuItem = style({
  color: vars.colors.blackMid,
  fontSize: vars.fs.xs,
  fontWeight: vars.fw.medium,
  transition: vars.transition.base,

  selectors: {
    '&:hover': { color: vars.colors.black }
  },

  '@media': {
    [mq.lg]: { color: vars.colors.black }
  }
})
