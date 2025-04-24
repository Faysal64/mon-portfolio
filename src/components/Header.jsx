import React from 'react';
import Logo from '../assets/images/Logo.png';
import '../styles/Header.css'; // On importe notre fichier CSS

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
