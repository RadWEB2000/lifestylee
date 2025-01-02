import { Inter } from "next/font/google";

const inter = Inter({
  display: "swap",
  preload: true,
  subsets: ["latin", "latin-ext"],
  variable: "--inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export { inter };
