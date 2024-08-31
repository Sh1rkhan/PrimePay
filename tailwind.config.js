/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#231656",
        secondary: "#625FFB",
        "ligth-grey": "#F5F5F5",
        "main-grey": "#D7D7D7",
        "light-green": "#2FCF3F",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "blog-banner": "url('/common/blog-banner.png')",
        "licenses-banner": "url('/common/licenses-banner.png')",
        "changelog-banner": "url('/common/change-banner.png')",
      },
    },
  },
  plugins: [],
};
