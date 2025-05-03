import { mq, vars } from "@styles/theme.css";
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
    variant: {
      content: {
        display: "flex",
        justifyContent: "center",
        gap: vars.space.gap.lg,
      },
      grid: {
        display: "grid",
        gap: vars.space.gap.xs,
        gridTemplateColumns:
          "repeat( auto-fit, minmax(calc(50% - 10px), 1fr) )",
        height: "80%",
        margin: "auto",

        "@media": {
          [mq.xs]: {
            display: "flex",
          },
        },
      },
    },
    direction: {
      row: { flexDirection: "row", width: "100%", minHeight: "50%" },
      rowEnd: {
        alignItems: "end",
        flexDirection: "row",
        width: "100%",
      },
      column: { flexDirection: "column" },
    },
  },
});
