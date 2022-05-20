import { createTheme } from '@nextui-org/react'

const theme = createTheme({
  type: 'light',
  theme: {
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
      black5: '#E9EAEA',
      gradient: 'linear-gradient(45deg, $secondary -50%, $primary 80%)'
    },
    fontSizes: {
      xs: '12px',
      sm: '16px',
      base: '21px',
      md: '28px',
      lg: '37px',
      xl: '50px',
      xxl: '66px',
      xxxl: '88px'
    }
  }
})

export default theme
