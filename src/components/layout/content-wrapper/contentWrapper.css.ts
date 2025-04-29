import { style } from "@vanilla-extract/css";
import { mq } from "@styles/theme.css";

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  justifyContent: "center",
  width: "50%",

  "@media": {
    [mq.lg]: {
      width: "100%",
    },
  },
});
