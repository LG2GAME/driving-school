import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const contactWrapper = style({
  display: "flex",
  flexDirection: "row",
  gap: 60,
  padding: vars.space.sm,

  "@media": {
    [mq.lg]: {
      flexDirection: "column",
    },
  },
});

export const contactContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 45,
});

export const contactHeading = style({
  fontSize: vars.fs.headingSm,
  fontWeight: 500,
});

export const contactPhoneNumber = style({
  fontSize: vars.fs.headingMd,
  fontWeight: 600,
});
