import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './routes/Home';
import NavCalculator from './routes/NavCalculator';
import NavQuotes from './routes/NavQuotes';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/calculator" element={<NavCalculator />} />
        <Route path="/quotes" element={<NavQuotes />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
