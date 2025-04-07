import React from 'react';
import Hero from './components/home/Hero';
import FeaturedProducts from './components/home/FeaturedProducts';
import RecommendedProducts from './components/home/RecommendedProducts';
import './components/home/productLayout.css'


const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <RecommendedProducts />
      
    </main>
  );
};

export default Home;
