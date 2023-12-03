import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className='app__body'>
      <Router>
       <Routes>
        <Route path="/rooms/:roomId">
           <Sidebar />
          <Chat />
        </Route>
        <Route path='/' />
        <Chat />
          <Route />
        </Routes>   
      </Router>
      </div>
    </div>
  );
}

export default App;


