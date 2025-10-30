import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { TabPanelProvider } from './context/TabContext.tsx'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TabPanelProvider>
      <App />
    </TabPanelProvider>
  </StrictMode>
)
