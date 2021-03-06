import React from 'react';

const NotFound = () => {
    return (
        <div className="container px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold text-secondary">404</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">The page you are looking for is not found.</p>
            </div>
        </div>
    );
};

export default NotFound;