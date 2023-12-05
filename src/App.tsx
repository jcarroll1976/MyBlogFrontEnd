import React from 'react';
import {Navigate,Route,BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home.tsx";
import SignUp from './components/SignUp.tsx';
import Navbar from './components/Navbar.tsx';
import Login from './components/Login.tsx';

function App() {


  return (
    <div className='App'>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/signup' element = {<SignUp />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = '*' element = {<Navigate to = "/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
