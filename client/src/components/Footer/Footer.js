import React from 'react';
import logo from '../../assets/logo.png';

const date = new Date()

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div>
            <img src={logo} alt="company logo" className="animate-bounce" />
          </div>

          <div>
            <h1 className="footer-heading">Order & Pickup</h1>
            <p>Order on the app</p>
            <p>Delivery</p>
            <p>Pickup</p>
          </div>
          <div>
            <h1 className="footer-heading">About us</h1>
            <p>Our Coffee</p>
            <p>Policies & Standards</p>
            <p>Our Heritage</p>
          </div>
          <div>
            <h1 className="footer-heading">Careers</h1>
            <p>International Careers</p>
            <p>Inclusion</p>
            <p>Culture & Value</p>
          </div>
            </div>
            <h1 className="copyright">Copyright &copy; {date.getFullYear()} <span>DTGL❤VER</span></h1>
           
      </footer>
    );
}

export default Footer
