import React from 'react'
import {EmployeeList} from './EmployeeList'
import { useNavigate } from 'react-router-dom'

export const Employee = () => {
  const navigate = useNavigate()
  return (
    <div>
        <button className='btn-new-employee' onClick={() => navigate("/Employee/Add")}>Add New Employee</button>
        <EmployeeList />
    </div>
  )
}