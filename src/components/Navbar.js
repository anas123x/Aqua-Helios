import React from 'react';
import logo from '../images/logo.png';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top px-5 mb-5 "
    style={{
      backgroundColor:"#053D57",
     
    }} >
    <div className="container-fluid d-flex flex-row justify-content-between align-items-center">
      <img src={logo} alt="logo" style={{height:70,width:100}} className=" img-fluid align-self-center"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse mr-5  mt-2 " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-white fw-bold" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white fw-bold" aria-current="page" href="/product">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white fw-bold" aria-current="page" href="/contact">Contact</a>
            
          </li>
        </ul>
      </div>
    </div>
</nav>
  );
}

export default Navbar;