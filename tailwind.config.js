/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow-pulse': 'pulse 15s ease-in-out infinite', // Adjust the duration as needed
        'bounce':'bounce 1s ease-in-out infinite '
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
    },
    bounce:{

    }
  }

  },
  plugins: [],
}
}
