import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const header = style({
  fontSize: vars.fs.heading,
});

export const description = style({
  fontSize: vars.fs.paragraph,
});
