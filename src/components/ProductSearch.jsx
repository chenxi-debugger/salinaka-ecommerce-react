import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductSearch = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search-results');
  };

  return (
    <button onClick={handleSearch}>Search</button>
  );
};

export default ProductSearch;
