import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeColorProvider from './context/ThemeColorContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeColorProvider>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>
  </ThemeColorProvider>
)
