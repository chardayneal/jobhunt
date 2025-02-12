import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'Parkinsans',
      'sans-serif',
    ].join(','),
  }
})

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
