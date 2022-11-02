import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
  const userStorage = localStorage.getItem("kandy_user")
  const localUser = JSON.parse(userStorage)

  if(localUser.staff) {
    return <EmployeeNav />
  } else {
    return <CustomerNav />
  }
}