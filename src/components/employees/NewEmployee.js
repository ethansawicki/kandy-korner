import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const NewEmployee = () => {
    const navigate = useNavigate()
    const [userId, setUserId] = useState([])
    const [employeeId, setEmployeeId] = useState([])
    const [newStartDate, setStartDate] = useState(new Date())
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const [newEmployee, setNewEmployee] = useState({
        startDate: newStartDate,
        payRate: 0
    })

    useEffect(
        () => {
            const fetchUserId = async () => {
                const res = await fetch(`http://localhost:8088/users?_sort=id&_order=desc`)
                const userRes = await res.json()
                setUserId(userRes)
            }
            fetchUserId()
        },
        []
    )

    useEffect(
        () => {
            const fetchEmpId = async () => {
                const res = await fetch(`http://localhost:8088/employees?_sort=id&_order=desc`)
                const empRes = await res.json()
                setEmployeeId(empRes)
            }
            fetchEmpId()
        },
        []
    )

    const handleClick = (event) => {
        event.preventDefault()
        const userToApi = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            employeesId: employeeId[0].id + 1
        }
        const employeeToApi = {
            usersId: userId[0].id,
            startDate: newEmployee.startDate,
            payRate: newEmployee.payRate
        }
        const sendUser = async () => {
            const userPost = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userToApi)
            }
            const userRes = await fetch(`http://localhost:8088/users`, userPost)
            await userRes.json()
        }
        const sendEmployee = async () => {
            const empPost = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employeeToApi)
            }
            const empRes = await fetch(`http://localhost:8088/employees`, empPost)
            await empRes.json()
            navigate("/employees")
        }
        sendUser()
        sendEmployee()
    }

  return (
    <form>
        <h2>New Employee Form</h2>
        <fieldset>
            <div>
                <label htmlFor='new-employee-name'>First Name: </label>
                <input 
                    type="text"
                    className='new-employee-name'
                    placeholder='Enter First Name Here...'
                    onChange={
                        (event) => {
                            const copy = {...newUser}
                            copy.firstName = event.target.value
                            setNewUser(copy)
                        }
                    }
                />
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label htmlFor='new-employee-name'>Last Name: </label>
                <input 
                    type="text"
                    className='new-employee-name'
                    placeholder='Enter Last Name Here...'
                    onChange={
                        (event) => {
                            const copy = {...newUser}
                            copy.lastName = event.target.value
                            setNewUser(copy)
                        }
                    }
                />
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label htmlFor='new-employee-name'>Email: </label>
                <input 
                    type="text"
                    className='new-employee-name'
                    placeholder='Enter Email Here...'
                    onChange={
                        (event) => {
                            const copy = {...newUser}
                            copy.email = event.target.value
                            setNewUser(copy)
                        }
                    }
                />
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label htmlFor='date'>Start Date:</label>
                <DatePicker className='date' selected={newStartDate} onChange={(date) => setStartDate(date)} />
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label htmlFor='new-employee-pay'>Starting Pay Rate: $</label>
                <input 
                    type="number"
                    className='new-employee-pay'
                    onChange={
                        (event) => {
                            const copy = {...newEmployee}
                            copy.payRate = +event.target.value
                            setNewEmployee(copy)
                        }
                    }
                />
            </div>
        </fieldset>
        <button onClick={(click) => handleClick(click)}>Submit New Employee</button>
    </form>
  )
}

export default NewEmployee