/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shade-of-white': 'var(--shade-of-white)',
        'shade-of-purple': 'var(--shade-of-purple)',
        'shade-of-contact-button': 'var(--shade-of-contact-button)',
        'shade-of-project-tags': 'var(--shade-of-project-tags)',
        'shade-of-lighter-purple': 'var(--shade-of-lighter-purple)',
        'shade-of-light-blue': 'var(--shade-of-light-blue)',
        'shade-of-dark-blue': 'var(--shade-of-dark-blue)',
      },
      screens: {
        'xs': '320px',  // Custom breakpoint for 320px
        
      },
      fontFamily: {
        'serif': ['"Roboto Serif"', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.hexagon': {
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '0.25rem',
        },
        '@media (max-width: 768px)': { //xs + xxs
          '.hexagon': {
            width: '2.5rem',
            height: '3rem',
            backgroundImage: 'url("./images/skills-section/hexagon-mobile.svg")',
          },
        },
        '@media (min-width: 769px) and (max-width: 1024px)': { //md
          '.hexagon': {
            width: '3.5rem',
            height: '4.1rem',
            backgroundImage: 'url("./images/skills-section/hexagon-tablet.svg")',
          },
        },
        '@media (min-width: 1025px)': { //lg
          '.hexagon': {
            width: '5.5rem',
            height: '6.5rem',
            backgroundImage: 'url("./images/skills-section/hexagon.svg")',
          },
        },
      });
    },
  ],
  
}

