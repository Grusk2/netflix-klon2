/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',              // Include your main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS and JSX/TSX files in src/
  ],
  theme: {
    extend: {}, // Customize your theme here
  },
  plugins: [],
};
