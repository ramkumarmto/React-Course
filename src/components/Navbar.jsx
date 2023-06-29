import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link , NavLink} from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function Navbar() {
 const number =  useSelector((state)=> state.cart.badgeNumber);
 console.log("number in cart", number)
  return (
    <>
      <div className="navbar_container">
        <ul>
          <li style={{ fontSize: 24,}}><NavLink style={{ color : 'tomato'}} >SHOPPING APP</NavLink></li>
          <li><NavLink className={({isActive}) => isActive  ? "active-class" : null} to="/">All Products</NavLink></li>
          <li><NavLink className={({isActive}) => isActive  ? "active-class" : null}  to="/featured-products">Featured Products</NavLink></li>
          <li><NavLink className={({isActive}) => isActive  ? "active-class" : null}  to="/contact">Contact</NavLink></li>
        </ul>

        <ul>
        <li><NavLink className={({isActive}) => isActive  ? "active-class" : null}  to="/signin">SignIn</NavLink></li>
        <li><NavLink className={({isActive}) => isActive  ? "active-class" : null}  to="/signup">Signup</NavLink></li>
        <li><NavLink className={({isActive}) => isActive  ? "active-class" : null}  to="/cart">Cart-{number}</NavLink></li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
// export default Navbar
