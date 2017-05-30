import React from 'react';

import Card from '../../components/card';
import Levels from '../../data/levels';


class LessonsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let lessons = [];
        Levels.categories.map(category => {
            lessons.push(<p key={category}>{category}</p>);
        });

        return (
            <div className="LessonsPage">
                {lessons}
            </div>
        );
    }

};

export default LessonsPage;
