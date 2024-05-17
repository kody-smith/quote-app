import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage.js'
import Subscribe from './components/subscribe.js'
import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/subscribe" element={<Subscribe />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
