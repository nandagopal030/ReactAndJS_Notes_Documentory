import {Link} from "react-router-dom"
import './Header.css'
export const Header = () => {
  return (
    <div className="navbar">
     <div className="logo">Food Cart    </div>
    <ul>
        <li>
            <Link to={"/"}> Home</Link>
        </li>
          <li>
            <Link to={"/Cart"}> View Cart</Link>
        </li>
    </ul>
    </div>
  )
}
