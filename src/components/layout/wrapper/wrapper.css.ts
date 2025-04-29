import { vars, mq } from "@styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    padding: vars.space.sm,
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    gap: 60,

    ":first-of-type": {
      minHeight: "87.97vh",
    },

    "@media": {
      [mq.lg]: {
        height: "100%",
      },
    },
  },
  variants: {
    direction: {
      column: { flexDirection: "column" },
      columnRev: { flexDirection: "column-reverse" },
      row: { flexDirection: "row" },
      rowRev: { flexDirection: "row-reverse" },
    },
  },
});
