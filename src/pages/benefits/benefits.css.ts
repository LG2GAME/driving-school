import { vars, mq } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const cardHeaderWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: 30,

  "@media": {
    [mq.xs]: {
      flexDirection: "column",
      alignItems: "start",
      gap: 5,
    },
  },
});

export const cardIndex = style({
  fontSize: vars.fs.headingMd,
  color: vars.colors.blue,
  fontWeight: 600,
});

export const cardTitle = style({
  fontSize: vars.fs.headingSm,
  fontWeight: 600,
});

export const cardText = style({
  fontSize: vars.fs.paragraphXs,
  fontWeight: 500,
});

export const image = style({
  borderRadius: vars.radius.default,
  aspectRatio: "3 / 2",
  width: "100%",

  "@media": {
    [mq.lg]: {
      width: "70%",
    },
    [mq.md]: {
      width: "80%",
    },
    [mq.xs]: {
      width: "100%",
    },
  },
});
