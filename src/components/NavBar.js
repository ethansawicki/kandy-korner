import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const nav = useNavigate()
  return (
    <ul className="navBar">
        <li className="navbar-item"><Link to={"/Home"}>Home</Link></li>
        <li className="navbar-item"><Link to={"/Locations"}>Locations</Link></li>
    </ul>
  )
}

export default NavBar