import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  MozOsxFontSmoothing: "grayscale",
  padding: 0,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("html", {
  scrollBehavior: "smooth",
});

globalStyle("body", {
  backgroundColor: vars.colors.white,
  color: vars.colors.black,
  fontFamily: "Montserrat, sans-serif",
  scrollBehavior: "smooth",
});

globalStyle("ul", {
  listStyle: "none",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
