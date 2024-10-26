// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '0px 4px 10px rgba(255, 255, 255, 0.7)', // Adjust the shadow values if needed
      },
    },
  },
  plugins: [],
};
