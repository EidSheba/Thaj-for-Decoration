import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Desktop/Mobile Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
          <li>
            <Link to="home" smooth={true} duration={500} className="nav-link">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="nav-link">
              من نحن
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="nav-link">
              خدمتنا
            </Link>
          </li>
          
          <li className={`dropdown ${workOpen ? 'open' : ''}`}>
            <span
              className="dropdown-toggle nav-link"
              onClick={(e) => {
                // Prevent closing the whole mobile menu when toggling submenu
                e.stopPropagation();
                setWorkOpen((prev) => !prev);
              }}
            >
              الاعمال
              <span className="dropdown-arrow">▼</span>
            </span>
            <div className="dropdown-menu">
              <Link to="desgin-section" smooth={true} duration={500} className="dropdown-item">
                تصميم داخلي
              </Link>
              <Link to="doing-section" smooth={true} duration={500} className="dropdown-item">
                التنفيذ 
              </Link>
            </div>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500} className="nav-link">
              الاراء
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="nav-link contact-btn">
              تواصل معنا
            </Link>
          </li>
        </ul>
        
        <div className="nav-logo">
          <Link to="home" smooth={true} duration={500}>
            <img 
              src="/src/assets/images/logo.jpeg" 
              alt="Logo" 
              className="logo"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          aria-label="فتح القائمة"
          aria-expanded={menuOpen}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
