import { createGlobalTheme } from "@vanilla-extract/css";

export const mq = {
  xs: "(width <= 576px)",
  md: "(width <= 768px)",
  lg: "(width <= 992px)",
  xl: "(width <= 1200px)",
};

export const vars = createGlobalTheme(":root", {
  colors: {
    white: "#ffffff",
    blackMid: "#00000099",
    black: "#000000",
    blue: "#60a5fa",
  },
  fs: {
    heading: "clamp(36px, 6vw, 44px)",
    headingMd: "clamp(28px, 5vw, 36px)",
    headingSm: "clamp(20px, 4vw, 24px)",
    paragraph: "clamp(20px, 3.5vw, 24px)",
    paragraphSm: "clamp(18px, 3vw, 20px)",
    paragraphXs: "clamp(14px, 2.5vw, 16px)",
  },
  mq: {
    xs: "(width <= 576px)",
    md: "(width <= 768px)",
    lg: "(width <= 992px)",
    xl: "(width <= 1200px)",
  },
  radius: {
    default: "25px",
  },
  space: {
    xs: "clamp(10px, 2.5vw, 15px) clamp(20px, 6vw, 30px) clamp(25px, 6vw, 30px) clamp(20px, 6vw, 30px)",
    sm: "clamp(15px, 4vw, 20px) clamp(20px, 6vw, 40px)",
    tile: "clamp(20px, 6vw, 45px) 0",
  },
  scale: {
    sm: "scale(1.025)",
  },
  shadows: {
    base: "0 6px 12px rgba(0, 0, 0, 0.08)",
  },
  transition: {
    base: "all 0.3s ease",
  },
});
