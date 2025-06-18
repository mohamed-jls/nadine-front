import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-links">
          <div className="brand">
            <p>Embrace your beauty, naturally.</p>
          </div>
          <h1>NI skin care</h1>

          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/hair">Hair</Link>
          </li>
          <li>
            <Link to="/skin">Skin</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/cart">🛒cart</Link>
          </li>
        </ul>
      </nav >
    </div>

  )
}
export default Navbar
