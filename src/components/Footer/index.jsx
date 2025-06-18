import React from 'react'
import "./style.css"
function Footer() {
  return (
    <div>
       <footer className="footer">
        <div className="footer-content">
            <div className="brand">
                <h2>NI</h2>
                <p>Embrace your beauty, naturally.</p>
            </div>
            {/* <div class="links">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div> */}
            <div className="socials">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i  className="fa-brands fa-facebook"></i></a>
                <a href="#"><i  className="fa-brands fa-twitter"></i></a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 NI. All Rights Reserved.</p>
        </div>
    </footer>
    </div>
  );
}


export default Footer
