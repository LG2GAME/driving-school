import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const teamMemberCard = recipe({
  base: {
    alignItems: "center",
    borderRadius: vars.radius.xs,
    boxShadow: vars.shadows.base,
    display: "flex",
    justifyContent: "end",
    minHeight: "50%",
    overflow: "hidden",
    padding: vars.space.margin.md,
    position: "relative",
    width: "100%",
  },
  variants: {
    reverse: {
      true: {
        flexDirection: "row-reverse",
        justifyContent: "start",
      },
    },
  },
});

export const cardImage = recipe({
  base: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    transform: "translateX(-30%)",
    left: 0,
    zIndex: -1,

    "@media": {
      [mq.md]: {
        height: "150%",
        transform: "translateX(-35%)",
      },
      [mq.xs]: {
        height: "200%",
        transform: "translate(-45%, -15%)",
      },
    },
  },
  variants: {
    reverse: {
      true: {
        transform: "translateX(30%) scaleX(-1)",
        right: 0,

        "@media": {
          [mq.md]: {
            transform: "translateX(35%) scaleX(-1)",
          },
          [mq.xs]: {
            transform: "translate(45%, -15%) scaleX(-1)",
          },
        },
      },
    },
  },
});

export const cardContent = style({
  width: "50%",

  "@media": {
    [mq.md]: {
      width: "60%",
    },
    [mq.xs]: {
      width: "85%",
    },
  },
});

export const cardName = style({
  fontSize: vars.fs.md,
});

export const cardRole = style({
  fontSize: vars.fs.xs,
});

export const cardDescription = style({
  fontSize: vars.fs.xxs,
  marginTop: vars.space.margin.xs,
});

export const teamMemberTile = recipe({
  base: {
    backgroundImage: "var(--tile-bg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "200%",
    border: 0,
    borderRadius: vars.radius.xl,
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
    width: "100%",

    selectors: {
      "&::before": {
        borderRadius: "inherit",
        content: "",
        inset: 0,
        position: "absolute",
        transition: vars.tranistion.base,
      },
      "&:hover::before": {
        backgroundColor: "rgba(0, 0, 0, 0.45)",
      },
    },
  },
  variants: {
    selected: {
      true: {
        cursor: "default",

        selectors: {
          "&::before": {
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          },
        },
      },
    },
  },
});

export const tileContent = style({
  alignItems: "center",
  color: vars.colors.white,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.gap.md,
  height: "100%",
  justifyContent: "end",
  padding: vars.space.margin.xl,
  position: "relative",
  textAlign: "center",
});

export const profileName = style({
  fontSize: vars.fs.md,
});

export const profileRole = style({
  fontSize: vars.fs.xs,
  fontWeight: vars.fw.light,
  width: "70%",
});
