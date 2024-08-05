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
  plugins: [],
}

