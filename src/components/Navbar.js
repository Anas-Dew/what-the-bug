import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link id='hero-heading' className="navbar-brand" to="/">Project WTB</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Problems</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/playground">Playground</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" target={"_blank"} to="https://tally.so/r/nPpOa1">Feedback</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link onClick={() => { navigator.clipboard.writeText("Hey look, \n\nI found this platform where I am shaping my debugging skills. \nJoin me! : https://wtb.anasdew.tech/").then(function () { alert('Copied to clipboard!'); }, function () { }); }} className="nav-link" to="#">invite Your Friend</Link>
                        </li>
                    </ul>
                    <div>
                        Catches : {localStorage.getItem('catch-count') || 0}
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar