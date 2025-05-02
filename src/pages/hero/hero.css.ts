import { style } from "@vanilla-extract/css";
import { vars, mq } from "@styles/theme.css";

export const featuresList = style({
  alignItems: "start",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.gap.sm,
  textAlign: "start",
});

export const featureItem = style({
  alignItems: "center",
  display: "flex",
  fontSize: vars.fs.xs,
  gap: vars.space.gap.sm,
});

export const imageWrapper = style({
  display: "flex",
  width: "50%",

  "@media": {
    [mq.lg]: {
      display: "none",
    },
  },
});

export const image = style({
  objectFit: "contain",
  width: "100%",
});
