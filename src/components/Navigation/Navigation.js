import logo from '../../logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light header-menu">
                <div class="container-fluid">
                    <Link class="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="OIA" width="35" class="d-inline-block align-text-top" />
                        <span className="fw-bold m-2">Online Islamic Academy</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/courses">Courses</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/cart">Cart</Link>
                            </li>
                        </ul>
                        <button type="button" class="btn btn-danger mx-3">Log in</button>
                        <button type="button" class="btn btn-outline-dark">Sign up</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;