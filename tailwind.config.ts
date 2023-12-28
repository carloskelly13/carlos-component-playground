import { type Config } from "tailwindcss"

export default {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
