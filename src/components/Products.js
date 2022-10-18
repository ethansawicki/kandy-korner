import { useEffect, useState } from 'react'

const Products = () => {
  const [candy, setCandy] = useState([])
  const [expensive, setExpensive] = useState([])
  const [expensiveTrue, setExpensiveTrue] = useState(false)


  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:8088/product`)
        const productData = await res.json()
        setCandy(productData)
      }
      fetchData()
    },
    []
  )

  useEffect(
    () => {
      if(candy){
        const expensiveCandy = candy.filter(candies => candies.price > 1.99)
        setExpensive(expensiveCandy)
      } else {
        setCandy(candy)
      }
      },[expensiveTrue]
  )

  return (
    <>
      <h2>Products</h2>
      <button onClick={() => setExpensiveTrue(true)} >Expensive</button>
      <button onClick={() => setExpensiveTrue(false)} >Not Expensive</button>
      {
        expensive.map(
          (products) => {
            return <div key={products.id}>
              <h3>{products.name}</h3>
                <ul>
                  <li>Price: {products.price}</li>
                  <li>Type: {products.productTypeId}</li>
                </ul>
            </div>
          }
        )
      }
    </>
  )
}

export default Products