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
    xxs: "clamp(14px, 2.5vw, 16px)",
    xs: "clamp(18px, 3vw, 20px)",
    sm: "clamp(20px, 3.5vw, 24px)",
    md: "clamp(20px, 4vw, 24px)",
    lg: "clamp(28px, 5vw, 36px)",
    xl: "clamp(36px, 6vw, 44px)",
  },
  fw: {
    light: "300",
    medium: "500",
    bold: "600",
  },
  radius: {
    xs: "25px",
    md: "50px",
    xl: "99px",
  },
  space: {
    gap: {
      burger: "3px",
      xs: "10px",
      sm: "20px",
      md: "30px",
      lg: "40px",
      xl: "60px",
    },
    margin: {
      xs: "30px",
      sm: "clamp(5px, 2vw, 10px) clamp(20px, 5vw, 40px)",
      md: "clamp(15px, 3vw, 20px) clamp(20px, 6vw, 30px)",
      mdlg: "clamp(25px, 6vw, 30px) clamp(20px, 6vw, 30px)",
      lg: "clamp(15px, 4vw, 20px) clamp(20px, 6vw, 40px)",
      xl: "clamp(20px, 6vw, 45px) 0",
    },
  },
  scale: {
    sm: "1.025",
    md: "1.05",
  },
  shadows: {
    base: "0 6px 12px rgba(0, 0, 0, 0.08)",
  },
  transition: {
    base: "all 0.3s ease",
  },
});
