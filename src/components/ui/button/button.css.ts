import { style } from '@vanilla-extract/css'
import { vars } from '@styles/theme.css'

export const button = style({
  backgroundColor: vars.colors.blue,
  border: 0,
  borderRadius: vars.radius.xl,
  color: vars.colors.white,
  cursor: 'pointer',
  display: 'flex',
  fontSize: 'clamp(16px, 3.5vw, 20px)',
  fontWeight: vars.fw.medium,
  padding: vars.space.margin.sm,
  transition: vars.transition.base,

  ':hover': { scale: vars.scale.sm }
})
