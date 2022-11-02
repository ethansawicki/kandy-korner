import React, { useEffect, useState } from 'react'

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  

  useEffect(
    () => {
      const fetchEmployees = async () => {
        const res = await fetch(`http://localhost:8088/employees?_expand=users&_expand=locations`)
        const employeeData = await res.json()
        setEmployees(employeeData)
      }
      fetchEmployees()
    },
    []
  )

  return (
    <div className='employee-container'>
      <h3>Employees</h3>
      {
        employees.map(employee => {
          return (
            <div key={`employees--${employee.id}`}>
              <ul className='employee-list'>
                <li>Full Name: {employee.users.firstName} {employee.users.lastName}</li>
                <li>Start Date: {employee.startDate}</li>
                <li>Email: {employee.users.email}</li>
                <li>Store City: {employee.locations.city}</li>
                <li>Store Address: {employee.locations.address}</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}