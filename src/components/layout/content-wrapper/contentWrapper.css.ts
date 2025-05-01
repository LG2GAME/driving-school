import { mq } from "@styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const contentWrapper = recipe({
  base: {
    width: "50%",

    "@media": {
      [mq.lg]: {
        width: "100%",
      },
    },
  },
  variants: {
    wrapper: {
      content: {
        display: "flex",
        justifyContent: "center",
        gap: 40,
      },
      grid: {
        alignItems: "center",
        display: "grid",
        gap: 10,
        gridTemplateColumns:
          "repeat( auto-fit, minmax(calc(50% - 10px), 1fr) )",
        height: "80%",
        margin: "auto",
        textAlign: "center",

        "@media": {
          [mq.xs]: {
            display: "flex",
          },
        },
      },
    },
    direction: {
      row: { flexDirection: "row", width: "100%", height: "50%" },
      column: { flexDirection: "column" },
    },
  },
});
