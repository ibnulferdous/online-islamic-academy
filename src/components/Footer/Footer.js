import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            {/* Subscribe to newsletter */}
            <div className="newsletter-div">
                <div className="container">
                    <h2 className="text-white text-center fw-light mb-3">Subscribe for updates</h2>
                    <div className="subscribe-form-container mx-auto">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-danger" type ="button" id="button-addon2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container py-4">
                    <p className="mb-0 text-center text-white">Copyright © 2021 Online Islamic Academy</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;