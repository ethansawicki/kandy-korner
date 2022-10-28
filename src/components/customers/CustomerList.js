import React, { useEffect, useState } from 'react'
import Customers from './Customers'
import './Customers.css'

const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            const fetchCustomers = async () => {
                const res = await fetch(`http://localhost:8088/customers?_expand=users`)
                const custData = await res.json()
                setCustomers(custData)
            }
            fetchCustomers()
        },
        []
    )

  return (
    <div className='customers'>
        {
            customers.map(customer => <Customers 
                key={customer.id}
                id={customer.users.id}
                firstName={customer.users.firstName}
                lastName={customer.users.lastName}
                email={customer.users.email}
                />
            )
        }
    </div>
  )
}

export default CustomerList