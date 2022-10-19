import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Products.css"

const Products = () => {
  const [candyTypes, setCandy] = useState([])
  const [filteredCandy, setFilteredCandy] = useState([])
  const [expensive, setExpensive] = useState(false)
  const navigate = useNavigate()


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

  return (
    <>
      <h2 className='products-Header'>Products</h2>
      <div className='btn-container'>
      <button className='btn-expensive-true' onClick={() => setExpensive(true)} >Top Priced</button>
      <button className='btn-expensive-false' onClick={() => setExpensive(false)} >Show All</button>
      <button className='btn-new-product-form' onClick={() => navigate("/Product/create")}>Add New Product</button>
      </div>
      <div className='products-Container'>
      {
        filteredCandy.map(
          (productType) => {
            return (
              <div key={productType.id}>
                <h3>{productType.name}</h3>
                  <ul className='products-List'>
                    <li>Price: {productType.price}/Unit</li>
                    <li>Type: {productType.productTypes.type}</li>
                  </ul>
              </div>  
            )
          }
        )
      }
      </div>
    </>
  )
}

export default Products