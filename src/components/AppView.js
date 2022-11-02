import React from 'react'
import { CustomerView } from './views/CustomerViews'
import { EmployeeView } from './views/EmployeeViews'

const AppView = () => {
  const userStorage = localStorage.getItem("kandy_user")
  const localUser = JSON.parse(userStorage)

  if(localUser.staff) {
    return <EmployeeView />
  } else {
    return <CustomerView />
  }
}

export default AppView