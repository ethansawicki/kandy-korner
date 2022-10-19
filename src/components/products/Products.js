import { useEffect, useState } from 'react'
import "./Products.css"

const Products = () => {
  const [candyTypes, setCandy] = useState([])
  const [filteredCandy, setFilteredCandy] = useState([])
  const [expensive, setExpensive] = useState(false)


  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:8088/productType?_embed=product`)
        const productData = await res.json()
        setCandy(productData)
      }
      fetchData()
    }, []
  )

  useEffect(
    () => {
      if(expensive){
        setFilteredCandy(candyTypes)
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
      </div>
      <div className='products-Container'>
      {
        filteredCandy.map(
          (productType) => {
            return (productType.product.map( 
              products => (
                <div key={products.id}>
                  <h3>{products.name}</h3>
                    <ul className='products-List'>
                      <li>Price: {products.price}/Unit</li>
                      <li>Type: {productType.type}</li>
                    </ul>
                </div>  
                )
              )
            ) 
          }
        )
      }
      </div>
    </>
  )
}

export default Products