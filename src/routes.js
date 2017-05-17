import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="review" component={ReviewPage} />
    </Route>
);
