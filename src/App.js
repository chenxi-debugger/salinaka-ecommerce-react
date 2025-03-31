import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basket from './components/basket/Basket';

const App = () => (
  <Router>
    <Routes>
      <Route path="/basket" element={<Basket />} />
      {/* Add more routes here as needed */}
    </Routes>
  </Router>
);

export default App;
