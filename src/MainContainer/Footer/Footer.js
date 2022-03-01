import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className='footer-parent'>
            {/* Footer */}
            <footer className="page-footer font-small mdb-color pt-4">
                {/* Footer Links */}
                <div className="container text-center text-md-left">
                    {/* Footer links */}
                    <div className="row text-center text-md-left mt-3 pb-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Company vision</h6>
                            <p> Yocar's mission is to bring delight in car buying, we offer a bouquet
                                of reliable tools and services to help car consumers decide on buying the
                                right car, at the right price and from the right partner.</p>
                        </div>
                        {/* Grid column */}
                        <hr className="w-100 clearfix d-md-none" />
                        {/* Grid column */}

                        {/* Grid column */}
                        <hr className="w-100 clearfix d-md-none" />
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Others</h6>
                            <p>
                                <a href="#!">Adverties with us</a>
                            </p>
                            <p>
                                <a href="#!">Careers</a>
                            </p>
                            <p>
                                <a href="#!">Customer care</a>
                            </p>

                        </div>
                        {/* Grid column */}
                        <hr className="w-100 clearfix d-md-none" />
                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>
                                <i className="fas fa-home mr-3" /> #88, 3rd Floor, Brigade Chambers,

                                Gandhi Bazaar Main Rd, Basavanagudi, Bangalore-560004 Karnataka, India</p>
                            <p>
                                <i className="fas fa-envelope mr-3" /> contactus@yocar.com</p>
                            <p>
                                <i className="fas fa-phone mr-3" /> +91 1234567890 </p>
                           
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Footer links */}
                    <hr />
                    {/* Grid row */}
                    <div className="row d-flex align-items-center">
                        {/* Grid column */}
                        <div className="col-md-7 col-lg-8">
                            {/*Copyright*/}
                            <p className="text-center text-md-left">© 2022 Copyright:
                                <a href="https://mdbootstrap.com/">
                                    <strong> Yocar.com</strong>
                                </a>
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-5 col-lg-4 ml-lg-0">
                            {/* Social buttons */}
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
                {/* Footer Links */}
            </footer>
            {/* Footer */}
        </div>
    )
}

export default Footer