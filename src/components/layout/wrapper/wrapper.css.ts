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
    dir: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },
  },
});
