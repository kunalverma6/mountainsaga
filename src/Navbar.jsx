import React from 'react'
import {NavLink} from "react-router-dom"
import web from "../src/images/rum.png"
const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="row">
              <div className=" justify-content-center">
              <h1> <NavLink className="navbar-brand "
              to="/"><h1 className='name'><img src={web} to="/" style={{width: "200px",height: "200px" ,border: "double"}}></img> 
              <br></br>MOUNTAINSAGA</h1></NavLink></h1>
              </div>
            </div>
  <div className="container-fluid">
    
  <div className="col-md-6">
  
  </div>
  
    <div className="collapse navbar-collapse" style={{width:'200px'}} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>
   
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
