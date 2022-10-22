import React from 'react'

export const ProductSearch = ({candySearch}) => {
  return (
    <div>
        <input 
            onChange={
                (change) => {
                    candySearch(change.target.value)
                }
            }
        className="search-input"
        type="text" placeholder='What candy yo?' />
    </div>
  )
}
