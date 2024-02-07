/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        xWhite: '#F8F4F9',
        xWhite2: '#E5EBEA',
        xBlack: '#1A181B',
        xPurple: '#827191',
        xOrange: '#FFD6AF',
        xRed: '#AD2E24',
        xGreen: '#08605F',
        xBlue: '#B4D4EE',
        xPink: '#B098A4',
        xGrey: '#747572',
        xPlatinum: '#DBD9DB'
      }
    }
  },
  plugins: []
};
