import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Content } from './components/content/Content';
import { Sidebar } from './components/Sidebar';
import { burgerToggle, tabToggle } from './jqueryHandler';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <Content tabToggle = {tabToggle} burgerToggle = {burgerToggle}/>
      </div>
    </Router>
  );
}

export default App;
