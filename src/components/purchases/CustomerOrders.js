import { useEffect, useState } from "react"
import "./CustomerOrders.css"


export const CustomerOrders = () => {
    const [purchases, setPurchases] = useState([])
    const userStorage = localStorage.getItem("kandy_user")
    const localUser = JSON.parse(userStorage)

    useEffect(
        () => {
            const fetchPurchases = async () => {
                const req = await fetch(`http://localhost:8088/purchases?_expand=products&customersId=${localUser.id}`)
                const res = await req.json()
                setPurchases(res)
            } 
            fetchPurchases()
        },
        []
    )

    return (
        <>
            <header>My Orders</header>
            {
                purchases.map(purchase => {
                    return(
                        <article className="purchases" key={`purchases--${purchase.id}`}>
                            <section className="purchase">{purchase.products.name}</section>
                            <section className="purchase">{purchase.products.price}</section>
                        </article>
                    )
                })
            }
        </>
    )
}