import React from 'react';
import './App.css';
import Home from "../src/components/Home";
import {Navigate,Route,BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import SinglePost from './components/SinglePost';

function App() {


  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/signup" element = {<SignUp />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/profile" element = {<Profile />} />
          <Route path = "/post" element = {<SinglePost />} />
          <Route path = "*" element = {<Navigate to = "/"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
