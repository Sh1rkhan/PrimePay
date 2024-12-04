/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#231656",
        secondary: "#625FFB",
        "ligth-grey": "#F5F5F5",
        "philippine-silver": "#B5B5B5",
        "dark-liver": "#4E4E4E",
        "main-grey": "#D7D7D7",
        "light-green": "#2FCF3F",
        "light-violet": "#8A6FFD",
        "dark-charcoal": "#303030",
        minsk: "#3D3269"
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
      screens: {
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1023px'},
      // // => @media (max-width: 1023px) { ... }

    //   'md': {'max': '767px'},
    //   // => @media (max-width: 767px) { ... }

    //   'sm': {'max': '680px'},
    //   // => @media (max-width: 639px) { ... }
    // }
    },
  },
  plugins: [],
};
