import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionContainer from './components/QuestionContainer.js'


function App() {

  return (
    <div className="App">
      <header className="App-header">
      The Sorting Hat
      </header>
    <QuestionContainer/>
    </div>
  );
}

export default App;
