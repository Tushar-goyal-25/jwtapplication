import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {BrowserRouter as Router} from 'react-router-dom' 

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router> 
      {/* Added the router here and the app  */}
    <App />
    </Router>
  </React.StrictMode>,
)
