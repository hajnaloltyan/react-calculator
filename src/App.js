import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import NavHome from './routes/NavHome';
import NavCalculator from './routes/NavCalculator';
import NavQuotes from './routes/NavQuotes';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NavHome />} />
        <Route path="calculator" element={<NavCalculator />} />
        <Route path="quotes" element={<NavQuotes />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
