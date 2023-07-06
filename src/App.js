import React from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Quotes from './components/Quotes/Quotes';

const App = () => (
  <main className="app">
    <Calculator />
    <Quotes />
  </main>
);

export default App;
