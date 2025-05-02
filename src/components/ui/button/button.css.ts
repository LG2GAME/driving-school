import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const button = style({
  backgroundColor: vars.colors.blue,
  borderRadius: vars.radius.xl,
  color: vars.colors.white,
  display: "flex",
  fontSize: "clamp(16px, 3.5vw, 20px)",
  fontWeight: vars.fw.medium,
  padding: vars.space.margin.sm,
  border: 0,
});
