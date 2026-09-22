import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@anclora/design-system/system.css'
import './styles/globals.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
