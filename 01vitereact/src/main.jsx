import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherElemet = (
  <a href="https://google.com" target="_blank"> Visit google </a>
)
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
