import React from 'react';
import './Home.css';
import qualityLearning from '../../images/quality-learning-02.png';
import flexibleTiming from '../../images/flexible-timing-02.png';
import exclusiveGuideline from '../../images/exclusive-guideline-02.png';
import { Link } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import useCourseData from '../../hooks/useCourseData';

const Home = () => {
    const [coursesData] = useCourseData();

    return (
        <div>
            {/* Hero Section */}
            <header>
                <div className="overlay-div">
                    <div className="container h-100 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="text-white display-5 text-center">And We have certainly made the Quran easy for remembrance, so is there any who will remember?</h1>
                        <p className="text-white text-center mt-3 h4 fw-light">- Surah Al-Qamar: 17, 22, 32, 40</p>
                        <div>
                            <Link to="/courses">
                                <button type="button" className="btn btn-lg btn-danger mx-2 my-5">All courses</button>
                            </Link>
                            <Link to="/about">
                                <button type="button" className="btn btn-lg btn-outline-light mx-2 my-5">About us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features */}
            <div className="container features-div">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 pb-5">
                    <div className="col text-center">
                        <img className="features-icon" src={qualityLearning} alt="" />
                        <h5>Quality Learning</h5>
                        <p>Dolor sit amet consectetur, adipisicing elit. Impedit fuga ex sapiente cumque cum ducimus culpa voluptatem obcaecati</p>
                    </div>
                    <div className="col text-center">
                        <img className="features-icon" src={flexibleTiming} alt="" />
                        <h5>Flexible Timing</h5>
                        <p>Sit amet consectetur adipisicing elit. Ipsum dolore officia dignissimos expedita nam excepturi laboriosam fuga voluptate harum</p>
                    </div>
                    <div className="col text-center">
                        <img className="features-icon" src={exclusiveGuideline} alt="" />
                        <h5>Quality Content</h5>
                        <p>Vero maiores amet consectetur adipisicing elit. Pariatur perspiciatis, ipsam earum, quas consequatur quos labore placeat vero maiores</p>
                    </div>
                </div>
            </div>

            {/* Popular Courses */}
            <div className="popular-courses-div">
                <div className="container">
                    <h2 className="text-center fw-light mb-5">Popular Courses</h2>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                        {/* Single Course Cardss */}
                        {
                            coursesData.slice(0, 4).map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </div>
                    <Link className="text-decoration-none" to="/courses">
                        <button type="button" className="btn btn-danger my-5 d-block mx-auto">View all courses</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Home;