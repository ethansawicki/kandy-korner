import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navBar">
        <li className="navbar-item"><Link to={"/Home"}>Home</Link></li>
        <li className="navbar-item"><Link to={"/Locations"}>Locations</Link></li>
        <li className="navbar-item"><Link to={"/Products"}>Products</Link></li>
    </ul>
  )
}

export default NavBar