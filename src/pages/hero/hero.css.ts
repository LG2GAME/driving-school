import { style } from "@vanilla-extract/css";
import { vars, mq } from "@styles/theme.css";

export const header = style({
  fontSize: vars.fs.heading,
});

export const description = style({
  fontSize: vars.fs.paragraph,
});

export const featuresList = style({
  alignItems: "start",
  display: "flex",
  flexDirection: "column",
  gap: 20,
  textAlign: "start",
});

export const featureItem = style({
  alignItems: "center",
  display: "flex",
  fontSize: vars.fs.paragraphSm,
  gap: 15,
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
