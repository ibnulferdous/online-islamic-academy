import React from 'react';
import './Home.css';
import qualityLearning from '../../images/quality-learning-02.png';
import flexibleTiming from '../../images/flexible-timing-02.png';
import exclusiveGuideline from '../../images/exclusive-guideline-02.png';

const Home = () => {
    return (
        <div>
            <header>
                <div className="overlay-div">
                    <div className="container h-100 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="text-white display-5 text-center">And We have certainly made the Quran easy for remembrance, so is there any who will remember?</h1>
                        <p className="text-white text-center mt-3 h4 fw-light">- Surah Al-Qamar: 17, 22, 32, 40</p>
                        <div>
                            <button type="button" class="btn btn-lg btn-danger mx-2 my-5">All courses</button>
                            <button type="button" class="btn btn-lg btn-outline-light mx-2 my-5">About us</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container py-5 features-div">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                    <div className="col text-center">
                        <img className="features-icon" src={qualityLearning} alt="" />
                        <h2>Quality Learning</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fuga ex sapiente cumque cum ducimus culpa voluptatem obcaecati</p>
                    </div>
                    <div className="col text-center">
                        <img className="features-icon" src={flexibleTiming} alt="" />
                        <h2>Flexible Timing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore officia dignissimos expedita nam excepturi laboriosam fuga voluptate harum</p>
                    </div>
                    <div className="col text-center">
                        <img className="features-icon" src={exclusiveGuideline} alt="" />
                        <h2>Quality Content</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis, ipsam earum, quas consequatur quos labore placeat vero maiores</p>
                    </div>
                </div>
            </div>
            <h1 className="display-1 text-center py-5">Display Hello World</h1>
            <h1 className="display-1 text-center py-5">Display Hello World</h1>
            <h1 className="display-1 text-center py-5">Display Hello World</h1>
            <h1 className="display-1 text-center py-5">Display Hello World</h1>
        </div>
    );
};

export default Home;