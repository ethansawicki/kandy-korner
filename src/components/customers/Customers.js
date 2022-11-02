import React from 'react'
import { Link } from 'react-router-dom'

const Customers = ({customer}) => {
  return (
    <div className='customer'>
        <div>
            <Link to={`/customers/${customer.users.id}`}>{customer.users.firstName} {customer.users.lastName}</Link>
        </div>
        <div>Email: {customer.users.email}</div>
    </div>
  )
}

export default Customers