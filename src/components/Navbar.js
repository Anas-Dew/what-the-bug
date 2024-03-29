import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.background_color} !important`}>
            <div className="container-fluid">
                <Link id='hero-heading' style={{color: `${props.text_color}`}} className={`navbar-brand`} to="/">Project WTB</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{color: `${props.text_color}`}} className="nav-link active" aria-current="page" to="/">Problems</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{color: `${props.text_color}`}} className="nav-link " to="/playground">Playground</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{color: `${props.text_color}`}} onClick={() => { navigator.clipboard.writeText("Hey look, \n\nI found this platform where I am shaping my debugging skills. \nJoin me! : https://wtb.anasdew.tech/").then(function () { alert('Share it on Whatsapp, Facebook etc.!'); }, function () { }); }} className="nav-link" to="#">Invite Your Friend</Link>
                        </li>
                    </ul>
                </div>
                {/* <div style={{marginRight: "1rem"}} className="d-flex">
                    <p>Coins : 1</p>
                    <p style={{marginLeft: "1rem"}}>Streak : 5</p>
                    <Link style={{color: `${props.text_color}`, marginLeft: "1rem"}} className="nav-link " to="/profile">Profile</Link>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar