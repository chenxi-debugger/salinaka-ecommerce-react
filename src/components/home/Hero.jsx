import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';


const Hero = () => (
  <section className="hero">
    <div className='hero-content-wrapper'>
        <div className="hero-content">
            <h1>See everything with Clarity</h1>
            <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
            <Link to="/shop" className="button">
                Shop Now &#9654;
            </Link>
        </div>
        <div className='hero-picture'>
            <img src={`${process.env.PUBLIC_URL}/image/banner-girl.png`} className='hero-picture-content' alt='banner-girl'></img>
        </div>
    </div>
  </section>
);

export default Hero;
