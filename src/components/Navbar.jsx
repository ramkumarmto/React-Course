import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link , NavLink} from "react-router-dom";
import { Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <div className="navbar_container">
        <ul>
          <li style={{ fontSize: 24,}}><NavLink style={{ color : 'tomato'}} >SHOPPING APP</NavLink></li>
          <li><NavLink className={({isActive}) => isActive  ? "active-class" : null} to="/">All Products</NavLink></li>
          <li><NavLink className={({isActive}) => isActive  ? "active-class" : null}  to="/featured-products">Featured Products</NavLink></li>
          <li><NavLink className={({isActive}) => isActive  ? "active-class" : null}  to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
// export default Navbar
