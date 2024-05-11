import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage, ProductPage } from './components/pages';
import './App.css';
import { NavigationMenu } from './components';

function App() {
  return (
    <Router>
      <NavigationMenu />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
