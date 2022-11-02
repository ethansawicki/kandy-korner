import { useState } from "react"

export const Products = ({productType}) => {
    const [purchase, setPurchase] = useState({
        usersId: 0,
        productId: 0,
        productTypesId: 0
    })


    return (
        <section className="product">
            <h3 className='products-Header'>{productType.name}</h3>
                <p>Price: ${productType.price}/Unit</p>
                <p>Type: {productType.productTypes.type}</p>
                <button>Purchase</button>
        </section>
    )
}