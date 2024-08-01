const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    groups: ['1'],
    extend: {},
    fontFamily: {
      'playfair-regular': ['playfair-regular', 'Arial', 'serif'],
      'playfair-bold': ['playfair-bold', 'Arial', 'serif'],
      'playfair-semibold': ['playfair-semibold', 'Arial', 'serif'],
      'playfair-medium': ['playfair-medium', 'Arial', 'serif'],
      'playfair-italic': ['playfair-italic', 'Arial', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      darkGray: '#04282D',
      gray: '#777777',
      jadeBlue: '#0B8497',
      lightGreen: '#E7F2ED',
      thistleGreen: '#D0D0A7',
      lightOrange: '#F8A488',
      lightYellow: '#F2F2E6',
      lightGray: '#e8e8e8',
      black: '#000000',
      white: '#ffffff',
    },
    fontSize: 
    {
      'xxs': '14px',
      'xs': '1rem',
      'sm': '18px',
      'base': '20px',
      'md': '22px',
      'lg': '24px',
      'xl': '26px',
      '2xl': '28px',
      '3xl': '30px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '42px',
      '8xl': '48px',
      '9xl': '60px',
      '10xl': '70px',
    }
  },
  plugins: [
    plugin(({ addVariant, theme }) => {
      const groups = theme('groups') || []
      groups.forEach((group) => {
        addVariant(`group-${group}-hover`, () => {
          return `:merge(.group-${group}):hover &`
        })
      })
    })
  ],
}
