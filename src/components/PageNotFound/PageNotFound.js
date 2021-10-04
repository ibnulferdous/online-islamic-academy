import React from 'react';
import pageNotFoundIcon from '../../images/page-not-found.png';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page-not-found-div">
            <div className="container py-5 text-center">
                <img src={pageNotFoundIcon} alt="Page not found icon" />
                <h1 className="display-1">
                    <span className="text-danger">404:</span> Page not Found!
                </h1>
            </div>
        </div>
        
    );
};

export default PageNotFound;