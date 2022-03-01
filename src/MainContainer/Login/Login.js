import React, { useState } from 'react'
import "./Login.css"
import {Button, Modal } from 'react-bootstrap'

 function Login(props) {
  
  return (
    <div>
     
      
      <Modal
        size="lg"
        show={props.showLoginModal}
        onHide={props.hideLoginModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section className="section vh-100">
        <div className="container py-5 h-50">
          <div className="row d-flex align-items-center justify-content-center h-80">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="PhoneImage" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
              
              
              <h5 className='user-notice'>Service will start soon for users</h5>
             
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form1Example13" className="form-control form-control-lg" placeholder='Enter username' />
                  
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input type="password" id="form1Example23" className="form-control form-control-lg" placeholder='Enter password'/>
                 
                </div>
              
                {/* Submit button */}
                <button type="submit" className="btn btn-lg btn-block">Login</button>
               
              </form>
            </div>
          </div>
        </div>
      </section>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Login
