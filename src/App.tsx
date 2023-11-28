import React from 'react';
import {Navigate,Route,BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home.tsx";
import SignUp from './components/SignUp.tsx';

function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/signup' element = {<SignUp />} />
          <Route path = '*' element = {<Navigate to = "/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
