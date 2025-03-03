export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter), sans-serif",
        lora: "var(--font-lora), serif",
      },
    },
  },
  plugins: [],
};
