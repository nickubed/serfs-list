import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content';
import './components/style.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Content />
      </div>
    </Router>
  );
}

export default App;
