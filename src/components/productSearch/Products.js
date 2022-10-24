import { useEffect, useState } from 'react'
import "../products/Products.css"

const Products = ({searchCandyTerms}) => {
  const [candyTypes, setCandy] = useState([])
  const [filteredCandy, setFilteredCandy] = useState([])

  useEffect(
    () => {
        if(searchCandyTerms) {
            const findCandy = candyTypes.filter((candy) => {
                return candy.price && candy.name.toLowerCase().startsWith(searchCandyTerms.toLowerCase())})
                setFilteredCandy(findCandy)
        }
    },
    [candyTypes, searchCandyTerms]
  )

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:8088/product?_expand=productTypes&_sort=price`)
        const productData = await res.json()
        setCandy(productData)
      }
      fetchData()
    }, []
  )

  return (
    <div className='products-Container'>
      {
        filteredCandy.map(candy => {
            return (
              <div key={`candy--${candy.id}`}>
                <h3 className='products-Header'>{candy.name}</h3>
                  <ul className='products-List'>
                    <li>${candy.price}/Unit</li>
                  </ul>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default Products