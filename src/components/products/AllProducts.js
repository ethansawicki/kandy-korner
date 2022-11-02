import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Products } from './Products'
import "./Products.css"

export const AllProducts = ({searchCandyTerms}) => {
  const [candyTypes, setCandy] = useState([])
  const [filteredCandy, setFilteredCandy] = useState([])
  const [expensive, setExpensive] = useState()
  const navigate = useNavigate()

  const userStorage = localStorage.getItem("kandy_user")
  const localUser = JSON.parse(userStorage)

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:8088/products?_expand=productTypes&_sort=price`)
        const productData = await res.json()
        setCandy(productData)
      }
      fetchData()
    }, []
  )

  useEffect(
    () => {
      if(expensive){
        const filterCandy = candyTypes.filter(candy => candy.price > 1.99)
        setFilteredCandy(filterCandy)
      } else {
        setFilteredCandy(candyTypes)
      }
      },[candyTypes, expensive]
  )

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

  return (
    <>
      <h2 className='products-Header'>Products</h2>
      <div className='btn-container'>
        {
          expensive
          ?
            <button className='btn-expensive-true' onClick={() => setExpensive(false)} >Show All</button>
          :
            <button className='btn-expensive-false' onClick={() => setExpensive(true)} >Top Priced</button>
        }
        {
          localUser.staff
          ?
          <button className='btn-new-product-form' onClick={() => navigate("/Product/create")}>Add New Product</button>
          :
          null
        }
      </div>
      <article className='products'>
      {
        filteredCandy.map(
          (productType) => <Products 
            key={`product--${productType.id}`}
            productType={productType}
          />
        )
      }
      </article>
    </>
  )
}