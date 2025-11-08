import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPages';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:slug" element={<ProductPage />} />
    </Routes>
  );
}
