import React from 'react';
import { Link } from 'react-router-dom';

const DetailsCards = (props) => {
    const { duration, image, instructor, name, price, rating, students, votes } = props.course;

    return (
        <div className="col">
            <div className="card rounded">
                <img src={image} className="card-img-top img-fluid" alt={name} />
                <div className="card-body my-4">
                    <Link className="card-title text-dark d-block text-decoration-none h5 mb-3">{name}</Link>
                    <p className="card-text mb-1"><strong>Instructor:</strong> {instructor}</p>
                    <p className="card-text mb-1"><strong>Duration:</strong> {duration} hours</p>
                    <p className="card-text mb-1"><strong>Enrolled:</strong> {students}</p>
                    <p className="card-text mb-1"><strong>Rating:</strong> {rating}
                        <span className="text-muted"> ({votes})</span>
                    </p>
                    <h5 className="text-danger fw-bold mt-2 mb-3">Price: ${price}</h5>
                    <button type="button" class="btn btn-outline-dark btn-sm">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCards;