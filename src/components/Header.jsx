import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
        <div className="leftHeader">
            <span className='logo'>Ecommerce</span>
        </div>
        <div className="centerHeader">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              {/* <li><Link to="/profile">My Profile</Link></li> */}
            </ul>
        </div>
        <div className="rightHeader">
            <span className='cartIcon'>Cart</span>
        </div>
    </div>
  )
}
