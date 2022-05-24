module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ManropeVariable', 'sans-serif']
      },
      colors: {
        primary: '#58BDF6',
        primary75: '#63C1F7',
        primary50: '#82CDF9',
        primary25: '#B6E2FB',
        primary10: '#DFF2FD',
        primary5: '#EFF9FF',
        secondary: '#45CEDE',
        secondary75: '#50D1E0',
        secondary50: '#73DAE6',
        secondary25: '#ADEAF1',
        secondary10: '#DBF6F9',
        secondary5: '#EDFBFB',
        black: '#1C2428',
        black75: '#2A3236',
        black50: '#545A5E',
        black25: '#9B9FA1',
        black10: '#D4D5D7',
        black5: '#E9EAEA'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
