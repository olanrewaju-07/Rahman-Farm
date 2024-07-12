import React, { useEffect, useState } from 'react'
import './Navbar.css'
import image_2 from '../../images/image-2.png'
import { Link } from 'react-scroll'
import menu_icon from '../../images/menu-icon.png'

const Navbar = () => {
  const[sticky, setSticky]=useState(false)
  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, []);

   const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu = () => {
         mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
   }


  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={image_2} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="Hero" offset={-260} duration={500} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" offset={-220} duration={500} smooth={true}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" offset={-200} duration={500} smooth={true}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="productBooking" offset={-220} duration={500} smooth={true}>
            Booking
          </Link>
        </li>
        <li>
          <Link to="Testimonial" offset={-190} duration={500} smooth={true}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            offset={-220}
            duration={500}
            smooth={true}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar