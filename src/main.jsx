import React from 'react'
import ReactDOM from 'react-dom/client'
import HideshiApp from './HideshiApp'
import './index.css'
import { BrowserRouter  } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HideshiApp />
    </BrowserRouter>
  </React.StrictMode>
)
