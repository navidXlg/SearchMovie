/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  
  "tailwindCSS.experimental.classRegex": [
    "^w-[\\d]+$",
    "^h-[\\d]+$",
    "^bg-[a-z]+-[\\d]+$",
    "^text-[a-z]+-[\\d]+$"
  ],
  "tailwindCSS.includeLanguages": {
    "javascript": "javascriptreact"
  },
}

