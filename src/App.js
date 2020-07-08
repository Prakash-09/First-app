import React from 'react';
import './App.css';
import FormsDemos from './components/FormsDemos';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventBinding from './components/EventBinding';
import UsingMap from './components/UsingMap';
import GettingJsonData from './components/GettingJsonData';

function App() {
  return (
    <div className="App">
      <header>
        My First App
      </header>
      <Router>
        <div className="appLis">
          <li className="appLink"><Link to="/FormsDemos" >FormsDemos</Link></li>
          <li className="appLink"><Link to="/EventBinding">EventBinding</Link></li>
          <li className="appLink"><Link to="/UsingMap">Map</Link></li>
          <li className="appLink"><Link to="/GettingJsonData">JsonData</Link></li>
        </div><hr />
        <Route path="/FormsDemos" component={FormsDemos} />
        <Route path="/EventBinding" component={EventBinding} />
        <Route path="/UsingMap" component={UsingMap} />
        <Route path="/GettingJsonData" component={GettingJsonData} />
      </Router>
    </div>
  );
}

export default App;
