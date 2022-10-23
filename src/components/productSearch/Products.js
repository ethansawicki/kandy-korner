import { useEffect, useState } from 'react'
import "../products/Products.css"

const Products = ({searchCandyTerms, searchCandy}) => {
  const [candyTypes, setCandy] = useState([])
  const [filteredCandy, setFilteredCandy] = useState([])

  useEffect(
    () => {
        if(searchCandy) {
            const findCandy = candyTypes.filter((candy) => {
                return candy.price && candy.name.toLowerCase().startsWith(searchCandyTerms.toLowerCase())})
                setFilteredCandy(findCandy)
        } else if(searchCandy === "") {
            setFilteredCandy(searchCandy)
        }
    },
    [searchCandy, searchCandyTerms]
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
    <>
      {
        filteredCandy.map(candy => {
            return <div key={`candy--${candy.id}`}>
                <ul>
                    <li>{candy.name}</li>
                    <li>{candy.price}</li>
                </ul>
            </div>
        })
      }
    </>
  )
}

export default Products