import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Initialize the root element and render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  /* StrictMode is a tool for highlighting potential problems in an application. 
     It activates additional checks and warnings for its descendants.
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
