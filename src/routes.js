import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/lessons/LessonsPage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="lessons" component={LessonsPage} />
    </Route>
);
