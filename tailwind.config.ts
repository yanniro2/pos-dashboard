/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-orange-500", ,],
  theme: {
    fontFamily: { sans: ["Open Sans", "sans-serif"] },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          primary: "var(--color-text-primary)",
          secoundary: "var(--color-text-secoundary)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-bg-fill)",
          dark: "var(--color-bg-dark)",
          medium: "var(--color-bg-medium)",
          light: "var(--color-bg-light)",
        },
      },
      colors: {
        primary: "var(--color-text-primary)",
        secoundary: "var(--color-text-secoundary)",
        borded: "var(--color-border)",
        "card-light": "var(--color-card-light)",
        "card-dark": "var(--color-card-dark)",
        "card-hover": "var(--color-card-hover)",
        "card-disable": "var(--color-card-disable)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
