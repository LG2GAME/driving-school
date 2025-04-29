import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars, mq } from "@styles/theme.css";

export const navigation = style({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  padding: vars.space.sm,
});

export const burger = style({
  display: "none",
  flexDirection: "column",
  gap: 3,
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
  borderRadius: 99,
  height: 3,
});

export const logo = style({
  textAlign: "center",
  fontSize: vars.fs.headingMd,
  fontWeight: 600,
  zIndex: 2,
});

export const menu = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: 30,
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
  fontSize: vars.fs.paragraphSm,
  fontWeight: 500,
  color: vars.colors.blackMid,

  "@media": {
    [mq.lg]: { color: vars.colors.black },
  },
});
