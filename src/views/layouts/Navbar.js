import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle'
import Logo from "../..//assets/images/robust.png"

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark " >
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="logo" width={100} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end text-uppercase" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutUs">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#wwd">What do we do?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href='/'>Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
