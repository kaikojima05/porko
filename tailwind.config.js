/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-black": "rgba(0, 0, 0, 0.67)",
        primary: "rgba(161, 109, 93, 0.65)",
        accent: "rgba(128, 171, 169, 0.59)",
      },
      fontFamily: {
        'head': ['Helvetica Neue', 'Helvetica', '游ゴシック', 'Yu Gothic', 'YuGothic', 'HiraKakuProN-W3i', 'メイリオ', 'Meiryo', 'sans-serif'],
        'content': ['Helvetica', '游ゴシック', 'Yu Gothic', 'YuGothic', 'HiraKakuProN-W3i', 'メイリオ', 'Meiryo', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'betterhover': { 'raw': '(hover: hover)' },
      }
    },
  },
  plugins: [],
};
