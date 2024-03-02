import React from 'react';
import "./nav.css"
function Navbar() {
  return (
    <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-grow">
      <ul id="menu-1-3de3ae7" className="elementor-nav-menu">
        <li className="menu-item">
          <a href="https://solvatten.org/what-is-solvatten/" className="elementor-item elementor-item-active">What is Solvatten?</a>
        </li>
        <li className="menu-item">
          <a href="https://solvatten.org/about-us-2/" className="elementor-item">About us</a>
        </li>
        <button className="btn btn-primary">azed</button>
        {/* Add the rest of your menu items here */}
      </ul>
    </nav>
  );
}

export default Navbar;