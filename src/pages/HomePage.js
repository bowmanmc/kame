import React from 'react';
import { Link } from 'react-router';


const HomePage = () => {
    return (
        <div className="HomePage">
            <Link to="/review">Review</Link>
        </div>
    );
};

export default HomePage;
