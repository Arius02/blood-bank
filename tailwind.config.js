module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Noto Sans Arabic', 'sans-serif'],
      body: ['cairo', 'sans-serif'],
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
        }
    },
    extend: {
      colors: {
        'primary': '#F63E13',
        'secondary': '#F74A21',
      },
      
    },

  },
  plugins: []
};