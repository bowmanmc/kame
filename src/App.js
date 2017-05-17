import React, { Component } from 'react';

import HomePage from './pages/HomePage';


class App extends Component {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}

export default App;
