import { vars } from "@styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const card = recipe({
  base: {
    borderRadius: vars.radius.default,
    boxShadow: vars.shadows.base,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    padding: vars.space.xs,
    width: "100%",
    marginBottom: "var(--step-spacing, 0)",
  },
  variants: {
    variant: {
      centered: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
      contact: {
        padding: vars.space.xsV,
        flexDirection: "row",
        alignItems: "center",
      },
    },
  },
});
