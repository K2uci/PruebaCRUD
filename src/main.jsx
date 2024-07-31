import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Contexto } from './Contexto.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexto>
      <App />
    </Contexto>
  </React.StrictMode>,
)
