/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      '3xs': '8px',
      '2xs': '10px',
      xs: '12px',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',

    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        grey: '#9E9E9E',
        lightGrey: '#E0E0E0',
        darkBlue: '#2F3857',
        blue: '#2C5EFF',
        lightBlue: '#F1F9FE',
        green: '#00CD82',
        orange: '#FAC802',
        yellow: '#FFFAED',
        red: '#FF4465',
        lightRed: '#FCF2FA'
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}

