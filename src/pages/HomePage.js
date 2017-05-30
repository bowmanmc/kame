import React from 'react';
import { Link } from 'react-router';


const HomePage = () => {
    return (
        <div className="HomePage">
            <Link to="/lessons">Lessons</Link>
        </div>
    );
};

export default HomePage;
