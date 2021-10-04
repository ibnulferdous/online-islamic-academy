import React from 'react';
import useCourseData from '../../hooks/useCourseData';
import DetailsCards from '../DetailsCards/DetailsCards';
import './Courses.css';

const Courses = () => {
    const [coursesData] = useCourseData();
    return (
        <main className="all-courses-div">
            <div className="container">
                <h1 className="display-5 mb-5 text-center">All Courses</h1>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        coursesData.map(course => <DetailsCards key={course.id} course={course}></DetailsCards>)
                    }
                </div>
            </div>
        </main>
    );
};

export default Courses;