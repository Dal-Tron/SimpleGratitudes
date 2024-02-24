/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "var(--color-primary-1)",
        "primary-2": "var(--color-primary-2)",
        "primary-3": "var(--color-primary-3)",
        "primary-4": "var(--color-primary-4)",
        "primary-5": "var(--color-primary-5)",
        "primary-6": "var(--color-primary-6)",
        "primary-7": "var(--color-primary-7)",
        "secondary-1": "var(--color-secondary-1)",
        "accent-1": "var(--color-accent-1)",
        "accent-2": "var(--color-accent-2)",
        "accent-3": "var(--color-accent-3)",
        "accent-4": "var(--color-accent-4)",
        "accent-5": "var(--color-accent-5)",
        "accent-6": "var(--color-accent-6)",
        "dark-1": "var(--color-dark-1)",
        "light-1": "var(--color-light-1)",
      },
    },
  },
  plugins: [],
};
