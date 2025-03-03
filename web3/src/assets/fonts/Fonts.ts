import { Inter, Lora } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin", "latin-ext"],
  preload: true,
  variable: "--font-inter",
});

const lora = Lora({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin", "latin-ext"],
  variable: "--font-lora",
});

export { inter, lora };
