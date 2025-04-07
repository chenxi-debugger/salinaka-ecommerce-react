import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from '../../constants/products';
import './product-card.css';
import './productLayout.css';

const featuredProducts = products.slice(0, 6);

const FeaturedProducts = () => (
  <section className="section-1">
  
      <div className='section-title'>
        <h2>Featured Products</h2>
        <Link to="/shop" className='small-link'>See All</Link>
      </div>
      <div className="featured-grid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} layout="compact" />
        ))}
       </div>

  </section>
);

export default FeaturedProducts;
