import React from 'react';
import './About.css';
import aboutOne from '../../images/about-01.jpg';
import qualityLearning from '../../images/quality-learning-02.png';
import flexibleTiming from '../../images/flexible-timing-02.png';
import exclusiveGuideline from '../../images/exclusive-guideline-02.png';
import liveSessions from '../../images/live-sessions.png';
import onlineLibrary from '../../images/online-library.png';
import notesForHome from '../../images/notes-for-home.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main className="about-div">
            {/* Little history about us */}
            <div className="container py-5">
                <h1 className="display-5 mb-5 text-center">About OIA</h1>
                <div className="row row-cols-1 row-cols-md-2 g-5 d-flex align-items-center">
                    <div className="col-md">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nostrum repudiandae inventore nobis qui voluptatem voluptates distinctio in veritatis soluta illum ea assumenda, sit molestias delectus aperiam impedit laborum omnis officiis. Recusandae dolores, labore eum placeat quos cumque sunt, quis voluptates hic, commodi voluptatem voluptate omnis nostrum illum maiores temporibus necessitatibus. Veniam, aliquid non voluptates et tenetur optio eius, necessitatibus culpa corrupti earum repellendus iste quas voluptatum blanditiis sint cum eum inventore quam voluptatem minima quis ad temporibus vitae? Eaque sapiente optio suscipit reprehenderit facilis tenetur placeat earum inventore aut.</p>
                        <Link to="/courses">
                            <button type="button" className="btn btn-lg btn-danger mt-3">View courses</button>
                        </Link>
                    </div>
                    <div className="col-md">
                        <img className="img-fluid" src={aboutOne} alt="Quran opens mind" />
                    </div>
                </div>
            </div>

            {/* Reason to choose us */}
            <div className="container reason-div">
                <h3 className="display-5 pb-5 mb-5 text-center">Reason to choose</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 pb-5">
                    <div className="col text-center">
                        <img className="reason-icon" src={qualityLearning} alt="qualityLearning" />
                        <h5>Quality Learning</h5>
                        <p>Dolor sit amet consectetur, adipisicing elit. Impedit fuga ex sapiente cumque cum ducimus culpa voluptatem obcaecati</p>
                    </div>
                    <div className="col text-center">
                        <img className="reason-icon" src={flexibleTiming} alt="flexibleTiming" />
                        <h5>Flexible Timing</h5>
                        <p>Sit amet consectetur adipisicing elit. Ipsum dolore officia dignissimos expedita nam excepturi laboriosam fuga voluptate harum</p>
                    </div>
                    <div className="col text-center">
                        <img className="reason-icon" src={exclusiveGuideline} alt="exclusiveGuideline" />
                        <h5>Quality Content</h5>
                        <p>Vero maiores amet consectetur adipisicing elit. Pariatur perspiciatis, ipsam earum, quas consequatur quos labore placeat vero maiores</p>
                    </div>
                    <div className="col text-center">
                        <img className="reason-icon" src={liveSessions} alt="liveSessions" />
                        <h5>Live sessions</h5>
                        <p>Vero maiores amet consectetur adipisicing elit. Pariatur perspiciatis, ipsam earum, quas consequatur quos labore placeat vero maiores</p>
                    </div>
                    <div className="col text-center">
                        <img className="reason-icon" src={onlineLibrary} alt="onlineLibrary" />
                        <h5>Huge online library</h5>
                        <p>Vero maiores amet consectetur adipisicing elit. Pariatur perspiciatis, ipsam earum, quas consequatur quos labore placeat vero maiores</p>
                    </div>
                    <div className="col text-center">
                        <img className="reason-icon" src={notesForHome} alt="notesForHome" />
                        <h5>Notes for home</h5>
                        <p>Vero maiores amet consectetur adipisicing elit. Pariatur perspiciatis, ipsam earum, quas consequatur quos labore placeat vero maiores</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;