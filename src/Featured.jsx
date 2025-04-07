import React from 'react';
// import { Link } from 'react-router-dom';
import ProductCard from './components/home/ProductCard';
import products from './constants/products';
import './components/home/product-card.css';
import './components/home/productLayout.css';
import './featured.css'

const featuredProducts = products.slice(0, 8);


const FeaturedPage = () => (
<section className="section-3">
  
<div className='section-3-hero-wrapper'>
        <div className='section-3-title'>
            <div className="section-3-content">
      <h2>Featured Products</h2>
      </div>
            <div className='section-3-picture'>
                <img src='/image/feature-page.png' className='section-3-picture-content' alt='feature-page'>
            </img>    
            </div>
        </div>
    </div>
    <div className="featured-grid">
      {featuredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
     </div>

</section>
);
export default FeaturedPage;