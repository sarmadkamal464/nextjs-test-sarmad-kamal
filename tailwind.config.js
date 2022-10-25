const colors = require('tailwindcss/colors')

/**
 * @type {import('tailwindcss').Config}
 */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.indigo,
      indigo: colors.indigo,
      gray: colors.gray,

      cPrimary: {
        extraLight: '#eaf2ff',
        light: '#2196f3',
        default: '#3678f1',
        dark: '#2f62bd'
      },
      cSecondary: colors.yellow,
      cText: {
        neutral: colors.gray['800'],
        link: '#3f83ff',
        linkActive: '#075985',
      },
      cFocus: '#87caff',
      cDisabled: {
        background: colors.gray['200']
      },
      cError: '#ff5858'
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  //darkMode: false, // or 'media' or 'class'
}

module.exports = config
