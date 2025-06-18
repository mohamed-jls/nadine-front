/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Include all source files
    "./src/components/**/*.{js,jsx}", // Include components folder
    "./public/index.html", // Include the main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

