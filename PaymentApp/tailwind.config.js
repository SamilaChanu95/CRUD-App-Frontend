/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
      extend: {
          zIndex: {
              '-1': -1,
              '49': 49,
              '60': 60,
              '70': 70,
              '80': 80,
              '90': 90,
              '99': 99,
              '999': 999,
              '9999': 9999,
              '99999': 99999
          },
          spacing: {
              '13': '3.25rem',
              '15': '3.75rem',
              '18': '4.5rem',
              '22': '5.5rem',
              '26': '6.5rem',
              '27': '6.75rem',
              '30': '7.5rem',
              '34': '8.5rem',
              '41': '10.25rem',
              '45': '11.25rem',
              '46': '11.50rem',
              '47': '11.75rem',
              '48': '12rem',
              '49': '12.25rem',
              '50': '12.5rem',
              '53': '13.25rem',
              '54': '13.5rem',
              '56': '14rem',
              '58': '14.5rem',
              '64': '16rem',
              '66': '16.5rem',
              '68': '17rem',
              '70': '17.5rem',
              '74': '18.5rem',
              '76': '19rem',
              '78': '19.5rem',
              '84': '21rem',
              '86': '21.5rem',
              '88': '22rem',
              '90': '22.5rem',
              '600': '600px',
              '1200': '1200px'
          }
      }
  },
  plugins: [],
}

