/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tx,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': 'Poppins, sans-serif',
      'sf-pro-display-black': 'sf-pro-display-black, sans-serif'
    }
  },
  daisyui: {
    themes: [
      "dark",
      "synthwave"
    ],
  },
  plugins: [daisyui],
}

