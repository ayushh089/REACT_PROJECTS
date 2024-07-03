import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactEl=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'GOOgle'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
