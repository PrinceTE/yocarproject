import React, { useState } from 'react'
import "./Navbar.css"
import Login from './../Login/Login';




export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
   
  let hideLoginModal=()=>{
    setShowLoginModal(false)
  }

  return (
    <div className='nav-parent'>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <img src='/assets/logo.jpg'></img>
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="#">New cars<span className="sr-only"></span></a>
        <a className="nav-link" href="#">Add cars<span className="sr-only">(current)</span></a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
         
          <button className='login-btn' onClick={() => setShowLoginModal(true)} >
            <img  src='/assets/login.png' />
          </button>
         
        </form>
      </nav>
      <Login
      hideLoginModal={hideLoginModal}
      showLoginModal={showLoginModal}

      />
    </div>
  )
}
