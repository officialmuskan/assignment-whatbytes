"use client"
import { Slider } from '@mui/material';
import React,{useState} from 'react'
// Slider

const Filters = () => {
    const [price, setPrice] = useState([0, 25000]);
    const priceHandler = (event, newPrice) => {
    if (Array.isArray(newPrice)) {
      setPrice(newPrice);
    }
  };
    const categories = ['All','Electronics', 'Clothing', 'Home'];
  return (
    <aside className="w-64 h-[80vh] fixed bg-blue-900 text-white p-4 rounded-md shadow-md hidden md:block">
        <h3 className="font-semibold mb-2 text-2xl">Filters</h3>
      <h3 className="font-semibold mb-2">Category</h3>
      <div className="flex flex-col gap-2 mb-4">
        {categories.map(cat => (
          <label key={cat} className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value={cat}
            />
            {cat}
          </label>
        ))}
      </div>

      <h3 className="font-semibold mb-2">Price Range</h3>
      <div className="flex flex-col gap-2 mb-4">
        <Slider color=''
                size="small"
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />
      </div>

      
    </aside>
  )
}

export default Filters