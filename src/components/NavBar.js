import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navBar">
        <li className="navbar-item"><Link to={"/Home"}>Home</Link></li>
        <li className="navbar-item"><Link to={"/Locations"}>Locations</Link></li>
        <li className="navbar-item"><Link to={"/products"}>Products</Link></li>
        <li className="navbar-item"><Link to={"/productSearch"}>Find A Product</Link></li>
        <li className="navbar-item"><Link to={"/employees"}>Employees</Link></li>
        <li className="navbar-item"><Link to={"/customers"} >Customers</Link></li>
    </ul>
  )
}

export default NavBar