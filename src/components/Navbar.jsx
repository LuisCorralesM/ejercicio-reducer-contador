import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" to="#">UseReducer</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ejercicio/contador">Ejercicio Contador</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-success" type="submit">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
