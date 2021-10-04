import logo from '../../logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light header-menu">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="OIA" width="35" className="d-inline-block align-text-top" />
                        <span className="fw-bold m-2">Online Islamic Academy</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courses">Courses</Link>
                            </li>
                        </ul>
                        <Link to="/access-page">
                            <button type="button" className="btn btn-danger mx-3">Log in</button>
                        </Link>
                        <Link to="/access-page">
                            <button type="button" className="btn btn-outline-dark">Sign up</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;