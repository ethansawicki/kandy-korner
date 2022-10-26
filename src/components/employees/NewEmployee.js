import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewEmployee = () => {
    const navigate = useNavigate
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        employeesId: 0
    })

    const [newEmployee, setNewEmployee] = useState({
        usersId: 0,
        startDate: "",
        payRate: 0
    })

    const handleClick = (event) => {
        event.preventDefault()
        const userToApi = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            employeesId: newUser.employeesId
        }
        const employeeToApi = {
            usersId: newUser.id,
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
                <label htmlFor='new-employee-name'>First Name:</label>
                <input 
                    type="text"
                    className='new-employee-name'
                    placeholder='Enter Name Here...'
                    onChange={
                        (event) => {
                            const copy = {...newProduct}
                            copy.name = event.target.value
                            updateProduct(copy)
                        }
                    }
                />
            </div>
        </fieldset>
    </form>
  )
}

export default NewEmployee