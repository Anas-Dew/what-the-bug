import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">What The Bug</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Problems</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Feedback</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Join WhatTheBug</Link>
                        </li>
                    </ul>
                    <div className="d-flex nav-item ">
                        <p className='nav-link'>Kills : 6</p>
                        <Link className='nav-link' to={"/"}>Account</Link>
                    </div>   
                   
                </div>

            </div>
        </nav>
    )
}

export default Navbar