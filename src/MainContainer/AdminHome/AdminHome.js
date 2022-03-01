import React, { Component } from 'react'
import Typical from 'react-typical'
import "./AdminHome.css"

export class AdminHome extends Component {
    render() {
        return (
            <div>
                <div className='admin-container'>
                    <div className='admin-parent'>
                        <div className='admin-header'>
                            {/* social media  */}
                            <div className='colz'>
                                <div className='colz-icon'>
                                    <a href='#'>
                                        <i className='fa fa-facebook-square'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='fa fa-google-plus-square'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='fa fa-instagram'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='fa fa-youtube-square'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='fa fa-twitter-square'></i>
                                    </a>
                                </div>
                            </div>
                            {/* tag line  */}
                            <div className='company-tagline'>
                                <span className='primary-text'>
                                    {" "}
                                    <h1>
                                        {" "}
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "FIND THE RIGHT CAR",
                                                1000,
                                                "YOUR CAR IS OUR PRIORITY",
                                                1000,
                                                "BUILD FOR YOU",
                                                1000,
                                            ]} />
                                    </h1>
                                    <span className='admin-role-tagline'>
                                        WORLD-CLASS COMFOR WITH EXITING BENIFITS
                                    </span>
                                </span>
                            </div>
                            {/* Search bar */}
                            <div className='admin-search'>

                                <div className="input-group">
                                    <div id="search-autocomplete" className="form-outline">
                                        <input type="search" id="form1" className="form-control" placeholder='Type to select car name' />

                                    </div>
                                    <button type="button" className="btn btn-search">
                                        Search
                                    </button>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>


                        </div>

                    </div>

                </div>
                {/* content should be here */}
                <br></br>
                <br></br>
                <br></br>
                 <br></br>
            </div>
        )
    }
}

export default AdminHome