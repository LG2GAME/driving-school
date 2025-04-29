import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const offerDetails = style({
  display: "flex",
  flexDirection: "column",
  gap: 60,
});

export const offerArrow = style({
  cursor: "pointer",
  appearance: "none",
  background: "transparent",
  border: 0,
});

export const offerHeader = style({
  display: "flex",
  alignItems: "center",
  gap: 30,

  "@media": {
    [mq.xs]: {
      flexDirection: "column",
      alignItems: "start",
    },
  },
});

export const offerTitle = style({
  fontSize: vars.fs.heading,
});

export const offerDescription = style({
  fontSize: vars.fs.paragraphSm,
});

export const offerList = style({
  fontSize: vars.fs.paragraphSm,
  listStyleType: "disc",
  paddingLeft: 30,
});

export const offerPrice = style({
  fontSize: vars.fs.paragraphSm,
  fontWeight: 600,
});
