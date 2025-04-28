import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

// ["*", "*::before", "*::after"].forEach((selector) => {
//   globalStyle(selector, {
//     boxSizing: "border-box",
//     margin: 0,
//     padding: 0,
//   });
// });

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  MozOsxFontSmoothing: "grayscale",
  padding: 0,
  WebkitFontSmoothing: "antialiased",
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
