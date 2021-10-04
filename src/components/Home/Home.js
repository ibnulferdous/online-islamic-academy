import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <header>
                <div className="overlay-div">
                    <div className="container h-100 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="text-white display-4 text-center">And We have certainly made the Quran easy for remembrance, so is there any who will remember?</h1>
                        <p className="text-white text-center mt-3 h4 fw-light">- Surah Al-Qamar: 17, 22, 32, 40</p>
                    </div>
                </div>
            </header>
            <h1 className="display-1 text-center py-5">Display Hello World</h1>
            <h1 className="display-1 text-center py-5">Display Hello World</h1>
            <h1 className="display-1 text-center py-5">Display Hello World</h1>
            <h1 className="display-1 text-center py-5">Display Hello World</h1>
        </div>
    );
};

export default Home;