// src/components/product/FilterPopup.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Range } from 'react-range';
import './filterPopup.css';

const brands = ['All Brands', 'Salt Maalat', 'Betsin Maalat', 'Black Kibal', 'Sexbomb'];
const sortOptions = ['None', 'Name A - Z', 'Name Z - A', 'Price High - Low', 'Price Low - High'];

const FilterPopup = ({ onClose, initialFilters, onApply }) => {
  const popupRef = useRef(null);
  const [localFilters, setLocalFilters] = useState(initialFilters);

  const MIN = 50;
  const MAX = 700;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleApply = () => {
    onApply(localFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      brand: 'All Brands',
      sortBy: 'None',
      priceRange: [MIN, MAX],
    };
    setLocalFilters(resetFilters);
    onApply(resetFilters);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <h3>Filters</h3>

        <div className="filter-row">
          <div className="filter-col">
            <label>Brand</label>
            <select
              value={localFilters.brand}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, brand: e.target.value })
              }
            >
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-col">
            <label>Sort By</label>
            <select
              value={localFilters.sortBy}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, sortBy: e.target.value })
              }
            >
              {sortOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-section">
          <label>Price Range</label>
          <div className="range-labels">
            <span>${localFilters.priceRange[0]}</span>
            <span>${localFilters.priceRange[1]}</span>
          </div>

          <Range
  step={10}
  min={50}
  max={700}
  values={localFilters.priceRange}
  onChange={(values) =>
    setLocalFilters({ ...localFilters, priceRange: values })
  }
  renderTrack={({ props, children }) => {
    const [min, max] = localFilters.priceRange;
    const left = ((min - 50) / (700 - 50)) * 100;
    const right = ((max - 50) / (700 - 50)) * 100;

    return (
      <div
        {...props}
        className="range-track-wrapper"
      >
        <div className="range-background" />
        <div
          className="range-fill"
          style={{
            left: `${left}%`,
            width: `${right - left}%`,
                }}
                />
                {children}
            </div>
            );
        }}
        renderThumb={({ props }) => (
            <div {...props} className="range-thumb" />
        )}
        />

        <div className="range-ticks">
        {[50, 150, 250, 350, 450, 550, 700].map((tick) => (
            <span key={tick} className="tick">
            {tick}
            </span>
        ))}
        </div>

        </div>

        <div className="filter-buttons">
          <button className="btn-apply" onClick={handleApply}>
            Apply filters
          </button>
          <button className="btn-reset" onClick={handleReset}>
            Reset filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
