import { vars } from '@styles/theme.css'
import { recipe } from '@vanilla-extract/recipes'

export const card = recipe({
  base: {
    borderRadius: vars.radius.xs,
    boxShadow: vars.shadows.base,
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space.gap.md,
    padding: vars.space.margin.mdlg,
    width: '100%',
    marginBottom: 'var(--step-spacing, 0)'
  },
  variants: {
    variant: {
      centered: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center'
      },
      contact: {
        padding: vars.space.margin.md,
        flexDirection: 'row',
        alignItems: 'center'
      }
    }
  }
})
