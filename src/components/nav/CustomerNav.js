import { Link, useNavigate } from "react-router-dom"

export const CustomerNav = () => {
    const navigate = useNavigate()
    return (
        <ul className="navBar">
            <li className="navbar-item"><Link to={"/"}>Home</Link></li>
            <li className="navbar-item"><Link to={"/Locations"}>Locations</Link></li>
            <li className="navbar-item"><Link to={"/products"}>Products</Link></li>
            <li className="navbar-item"><Link to={"/productSearch"}>Find A Product</Link></li>
            {
                    localStorage.getItem("kandy_user")
                        ? <li className="navbar__item navbar__logout">
                            <Link className="navbar__link" to="" onClick={() => {
                                localStorage.removeItem("kandy_user")
                                navigate("/", {replace: true})
                            }}>Logout</Link>
                        </li>
                        : ""
                }
        </ul>
      )
}