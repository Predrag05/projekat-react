import ReactDOM from 'react-dom';
import './index.css';


import React, { useState } from 'react';
import './layout/style.css'
import { BrowserRouter as Router } from 'react-router-dom' 
import Content from './layout/Content';





const App = () => {
  
  const [user,setUser] = useState()
  return (
    <>
    <Router>
        <Content setUser={setUser} user={user}/>
    </Router>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
