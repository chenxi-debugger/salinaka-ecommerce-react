import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/home/ProductCard';
import products from './constants/products';
import './components/home/product-card.css';
import './components/home/productLayout.css';
import './recommended.css'

const featuredProducts = products.slice(7, 13);

const RecommendedPage = () => (
    <section className="section-4">
    <div className='section-4-hero-wrapper'>
        <div className='section-4-title'>
            <div className="section-4-content">
                <h1>Recommended Products</h1>
            </div>
            <div className='section-4-picture'>
                <img src='/image/recomended-page.png' className='section-4-picture-content'>
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
export default RecommendedPage;