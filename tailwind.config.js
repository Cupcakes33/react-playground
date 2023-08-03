/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".text-primary": {
          "@apply text-neutral-900 dark:text-neutral-200": "",
        },
        ".text-secondary": {
          "@apply text-neutral-700 dark:text-neutral-300": "",
        },
        ".text-mute": {
          "@apply text-neutral-400 dark:text-neutral-200": "",
        },
        ".bg-primary": {
          "@apply text-neutral-100 dark:text-neutral-900": "",
        },
        ".bg-secondary": {
          "@apply text-neutral-300 dark:text-neutral-700": "",
        },
      });
    },
  ],
};
