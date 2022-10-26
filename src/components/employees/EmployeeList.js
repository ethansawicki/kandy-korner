import React, { useEffect, useState } from 'react'

const EmployeeList = () => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(
    () => {
      const fetchEmployees = async () => {
        const res = await fetch(`http://localhost:8088/employees?_expand=users`)
        const employeeData = await res.json()
        setUsers(employeeData)
      }
      fetchEmployees()
    },
    []
  )

  useEffect(
    () => {
        const employeeUsers = users.filter(emp => emp)
        setFilteredUsers(employeeUsers)
    },
    [users]
  )

  return (
    <div className='employee-container'>
      <h3>Employees</h3>
      {
        filteredUsers.map(users => {
          return (
            <div key={`employees--${users.id}`}>
              <ul className='employee-list'>
                <li>Full Name: {users.users.firstName} {users.users.lastName}</li>
                <li>Start Date: {users.startDate}</li>
                <li>Email: {users.users.email}</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default EmployeeList