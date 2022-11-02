import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const NewProductsForm = () => {
    const [newProduct, updateProduct] = useState({
        name: "",
        price: 0,
        productTypesId: 0
    })
    const navigate = useNavigate()
    const handleSaveClick = (event) => {
        event.preventDefault()
        const productToDatabase = {
            name: newProduct.name,
            price: newProduct.price,
            productTypesId: newProduct.productTypesId
        }
        const addNewProduct = async () => {
            const post = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productToDatabase)
            }
            const res = await fetch(`http://localhost:8088/product?_expand=productTypes`, post)
            await res.json()
            navigate("/products")
        }
        addNewProduct()
    }
  return (
    <form>
        <h2>New Product Form</h2>
        <fieldset>
            <div>
                <label htmlFor='new-product-name'>Product Name:</label>
                <input 
                    type="text"
                    className='new-product-name'
                    placeholder='Enter Name Here...'
                    onChange={
                        (event) => {
                            const copy = {...newProduct}
                            copy.name = event.target.value
                            updateProduct(copy)
                        }
                    }
                />
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label htmlFor='new-product-price'>New Product Price:</label>
                <input 
                    type="number"
                    className='new-product-price'
                    placeholder='Enter Price Here..'
                    onChange={
                        (event) => {
                            const copy = {...newProduct}
                            copy.price = +event.target.value
                            updateProduct(copy)
                        }
                    }/>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <input 
                    type='radio'
                    name='hard-candy'
                    id='hard-candy'
                    value='1'
                    onChange={
                        (event) => {
                            const copy = {...newProduct}
                            copy.productTypesId = +event.target.value
                            updateProduct(copy)
                        }
                    }
                    checked={newProduct.productTypesId === 1}
                 />
                <label htmlFor='hard-candy'>Hard Candy</label>
                <input 
                    type='radio'
                    name='chocolate'
                    id='chocolate'
                    value='2'
                    onChange={
                        (event) => {
                            const copy = {...newProduct}
                            copy.productTypesId = +event.target.value
                            updateProduct(copy)
                        }
                    }
                    checked={newProduct.productTypesId === 2}
                    />
                <label htmlFor='chocolate'>Chocolate</label>
                <input 
                    type='radio'
                    name='gummies'
                    id='gummies'
                    value='3'
                    onChange={
                        (event) => {
                            const copy = {...newProduct}
                            copy.productTypesId = +event.target.value
                            updateProduct(copy)
                        }
                    }
                    checked={newProduct.productTypesId === 3}
                    />
                <label htmlFor='gummies'>Gummies</label>
                <input 
                    type='radio'
                    name='sour-candy'
                    id='sour-candy'
                    value={4}
                    onChange={
                        (event) => {
                            const copy = {...newProduct}
                            copy.productTypesId = +event.target.value
                            updateProduct(copy)
                        }
                    }
                    checked={newProduct.productTypesId === 4}
                    />
                <label htmlFor='sour-candy'>Sour Candy</label>
            </div>
        </fieldset>
        <button onClick={(clickEvent) => handleSaveClick(clickEvent)}>
            Add New Candy
        </button>
    </form>
  )
}