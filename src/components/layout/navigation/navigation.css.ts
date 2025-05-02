import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars, mq } from "@styles/theme.css";

export const navigation = style({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  padding: vars.space.margin.lg,
});

export const burger = style({
  display: "none",
  flexDirection: "column",
  gap: vars.space.gap.burger,
  marginLeft: "auto",
  width: 25,
  zIndex: 2,
  backgroundColor: "transparent",
  height: "max-content",

  "@media": {
    [mq.lg]: { display: "flex" },
  },
});
globalStyle(`${burger} span`, {
  backgroundColor: vars.colors.black,
  borderRadius: vars.radius.xl,
  height: 3,
});

export const logo = style({
  textAlign: "center",
  fontSize: vars.fs.lg,
  fontWeight: vars.fw.bold,
  zIndex: 2,
});

export const menu = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: vars.space.gap.md,
    marginLeft: "auto",

    "@media": {
      [mq.lg]: {
        backgroundColor: vars.colors.white,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  },
  variants: {
    open: {
      true: { transform: "translateX(0)" },
      false: { transform: "translateX(-105%)" },
    },
  },
});

export const menuItem = style({
  fontSize: vars.fs.xs,
  fontWeight: vars.fw.medium,
  color: vars.colors.blackMid,

  "@media": {
    [mq.lg]: { color: vars.colors.black },
  },
});
