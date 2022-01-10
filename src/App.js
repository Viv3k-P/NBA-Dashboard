import React, {useState,useEffect} from 'react';

import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Home from './TODO/Home';
import Login from './TODO/Login';
import Navbar from './components/Navbar/Navbar';
import './App.css';



import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';



function App() {

    
    
    return(
        
        <div className = "main">
            <Router>
                <Routes>
                    <Route path="/" element ={<Home/>} exact/>
                    <Route path="/scores" element ={<Dashboard/>} />
                    <Route path="/SignIn" element ={<Login/>} />
                </Routes>
            </Router>
            </div>
    )
  }

export default App;
