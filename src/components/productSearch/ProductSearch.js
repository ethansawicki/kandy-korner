import React from 'react'
import './productSearch.css'

export const ProductSearch = ({searchCandy}) => {
  return (
    <div className='search-container'>
      <label htmlFor='search-input'>Find A Candy</label>
        <input 
            onChange={
                (change) => {
                    searchCandy(change.target.value)
                }
            }
        className="search-input"
        type="text" placeholder='What candy yo?' />
    </div>
  )
}
