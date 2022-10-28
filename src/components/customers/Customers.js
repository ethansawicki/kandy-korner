import React from 'react'
import { Link } from 'react-router-dom'

const Customers = ({id, firstName, lastName, email}) => {
  return (
    <div className='customer'>
        <div>
            <Link to={`/customers/${id}`}>{firstName} {lastName}</Link>
        </div>
        <div>Email: {email}</div>
    </div>
  )
}

export default Customers