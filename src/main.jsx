import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './routing1/App.css'
import App from './routing1/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
