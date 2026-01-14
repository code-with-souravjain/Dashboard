import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeColorProvider from './context/ThemeColorContext.jsx'
import LanguageProvider from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeColorProvider>
  <BrowserRouter>
  <StrictMode>
    <LanguageProvider>
    <App />
    </LanguageProvider>
  </StrictMode>,
  </BrowserRouter>
  </ThemeColorProvider>
)
