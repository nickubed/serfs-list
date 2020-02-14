import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content';
import './components/style.scss';
import Header from './components/header';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Router>
  );
}

export default App;
