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
  },
  variants: {
    isCentered: {
      true: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      },
    },
  },
});
