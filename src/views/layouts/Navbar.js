import React, { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle'

export default function Navbar() {

    const [isNavDark, setIsNavDark] = useState(false) 

    window.onscroll = function () {
        console.log()
        window.scrollY >= 55 ? setIsNavDark(true) : setIsNavDark(false);
    };
    return (
        <>
            <nav className={isNavDark ? "navbar navbar-expand-lg fixed-top bg-dark " : "navbar navbar-expand-lg fixed-top bg-transparent "} >
                <div className="container">
                    <a className="navbar-brand" href="/">Robust</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">What We Do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
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
