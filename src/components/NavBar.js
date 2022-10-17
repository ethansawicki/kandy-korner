import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const nav = useNavigate()
  return (
    <div className="navBar">
        <Link to={"/Locations"}>Locations</Link>
        <Link to={"/Home"}>Home</Link>
    </div>
  )
}

export default NavBar