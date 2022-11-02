import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CustomerDetailView = () => {
    const navigate = useNavigate()
    const {customerId} = useParams()
    const [customerDetails, setCustomerDetails] = useState({
        loyaltyNumber: ""
    })
    
    useEffect(
        () => {
            const fetchCustomerDetails = async () => {
                const res = await fetch(`http://localhost:8088/customers?_expand=users&usersId=${customerId}`)
                const customerData = await res.json()
                setCustomerDetails(customerData[0])
            }
            fetchCustomerDetails()
        },
        [customerId]
    )

   const handleUpdateUserLoyalty = (event) => {
        const updateLoyaltyNumberOnly = {
            usersId: +customerId,
            loyaltyNumber: customerDetails.loyaltyNumber
        }
        event.preventDefault()
        const updateLoyaltyNumber = async () => {
            const put = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateLoyaltyNumberOnly)
            }
            const response = await fetch(`http://localhost:8088/customers/${customerDetails.id}`, put)
            await response.json()
            navigate("/customers")
        }
        updateLoyaltyNumber()
    }

  return (
    <form>
        <h2 className="loyalty-number-header">Edit User Loyalty Number</h2>
        <fieldset>
            Name: {customerDetails?.users?.firstName} {customerDetails?.users?.lastName}
        </fieldset>
        <fieldset>
            Email: {customerDetails.users?.email}
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="loyalty-number">Loyalty Number:</label>
                <input
                    required autoFocus
                    type="text"
                    className="loyalty-number"
                    placeholder="Brief description of problem"
                    value={customerDetails.loyaltyNumber}
                    onChange={
                        (event) => {
                        const copy = {...customerDetails}
                        copy.loyaltyNumber = +event.target.value
                        setCustomerDetails(copy)
                        }
                    }
                    />
            </div>
        </fieldset>
        <button onClick={(click) => {handleUpdateUserLoyalty(click)}}>Update</button>
    </form>
  )
}

export default CustomerDetailView