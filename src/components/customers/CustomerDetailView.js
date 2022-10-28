import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CustomerDetailView = () => {
    const {customerId} = useParams()
    const [customerDetails, setCustomerDetails] = useState([])

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

  return (
    <div className='customer'>
        <header className='customer-header'>{customerDetails?.users?.firstName} {customerDetails?.users?.lastName}</header>
        <div>Email: {customerDetails?.users?.email}</div>
        <div>Loyalty Number: {customerDetails.loyaltyNumber}</div>
    </div>
  )
}

export default CustomerDetailView