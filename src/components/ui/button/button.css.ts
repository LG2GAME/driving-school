import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const button = style({
  backgroundColor: vars.colors.blue,
  borderRadius: 99,
  color: vars.colors.white,
  display: "flex",
  fontSize: "clamp(16px, 3.5vw, 20px)",
  fontWeight: 500,
  padding: "clamp(5px, 2vw, 10px) clamp(20px, 5vw, 40px)",
  transition: vars.transition.base,
  border: 0,

  ":hover": {
    transform: vars.scale.sm,
  },
});
