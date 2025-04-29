import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const card = style({
  borderRadius: vars.radius.default,
  boxShadow: vars.shadows.base,
  display: "flex",
  flexDirection: "column",
  gap: 30,
  padding: vars.space.xs,
  width: "100%",
});
