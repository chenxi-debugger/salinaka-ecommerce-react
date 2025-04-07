// src/Shop.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import productsData from './constants/products';
import ProductCardShop from './components/home/ProductCardShop';
import FilterPopup from './components/product/FilterPopup';
import './shop.css';
import './components/product/filterPopup.css';
import './components/home/productCardShop.css';

const Shop = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.values);
  const showFilterPopup = useSelector((state) => state.filters.showPopup);

  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [visibleCount, setVisibleCount] = useState(12);

  const defaultFilters = {
    brand: 'All Brands',
    sortBy: 'None',
    priceRange: [50, 700], 
  };

  const hasActiveFilters = JSON.stringify(filters) !== JSON.stringify(defaultFilters);

  useEffect(() => {
    let updated = [...productsData];

    if (filters.brand !== 'All Brands') {
      updated = updated.filter(p =>
        p.brand.toLowerCase() === filters.brand.toLowerCase()
      );
    }

    const [min, max] = filters.priceRange;
    updated = updated.filter(p => {
      const price = typeof p.price === 'string'
        ? parseFloat(p.price.replace('$', ''))
        : p.price;
      return price >= min && price <= max;
    });

    switch (filters.sortBy) {
      case 'Name A - Z':
        updated.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Name Z - A':
        updated.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Price Low - High':
        updated.sort((a, b) => a.price - b.price);
        break;
      case 'Price High - Low':
        updated.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(updated);
    setVisibleCount(12); // reset to 12 on filter change
  }, [filters]);

  const handleApplyFilters = (newFilters) => {
    dispatch({ type: 'SET_FILTERS', payload: newFilters });
    dispatch({ type: 'CLOSE_FILTER_POPUP' });
  };

  const removeFilter = (type) => {
    let updated = { ...filters };
    if (type === 'priceRange') updated.priceRange = [50, 700];
    else updated[type] = type === 'brand' ? 'All Brands' : 'None';

    dispatch({ type: 'SET_FILTERS', payload: updated });
  };

  const handleShowMore = () => {
    setVisibleCount(filteredProducts.length);
  };

  return (
    <div className="shop-page">
      {hasActiveFilters && (
        <div className='filter-summary-wrapper'>
          <div className="filter-summary">
            <p className='filter-summary-title'>Found {filteredProducts.length} products</p>
            <div className="active-filters">
              {filters.brand !== 'All Brands' && (
                <span className="filter-tag">
                  <div>Brand: </div>
                  <span className='filter-tag-content'>{filters.brand}
                  <button onClick={() => removeFilter('brand')}>×</button></span>
                </span>
              )}
              {(filters.priceRange[0] !== 50 || filters.priceRange[1] !== 700) && (
                <span className="filter-tag">
                  <div>Price Range: </div>
                  <span className='filter-tag-content'>${filters.priceRange[0]} - ${filters.priceRange[1]}
                  <button onClick={() => removeFilter('priceRange')}>×</button></span>
                </span>
              )}
              {filters.sortBy !== 'None' && (
                <span className="filter-tag">
                  <div>Sort By: </div>
                  <span className='filter-tag-content'>{filters.sortBy}
                  <button onClick={() => removeFilter('sortBy')}>×</button></span>
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {showFilterPopup && (
        <FilterPopup
          onClose={() => dispatch({ type: 'CLOSE_FILTER_POPUP' })}
          initialFilters={filters}
          onApply={handleApplyFilters}
        />
      )}

      <div className="product-list shop-grid">
        {filteredProducts.slice(0, visibleCount).map((p) => (
          <ProductCardShop key={p.id} product={p} showPrice />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={handleShowMore}>
            Show More Items
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
