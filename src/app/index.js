import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';

import {Mainpage} from './js/Mainpage';
import {Music} from './js/Music';

// import './css/index.css';

class App extends React.Component {
    render() {
        return (
                <Router history={browserHistory}>
                    <Route path="/" component={Mainpage} />
                    <Route path="/music" component={Music} />
                </Router>
            );
    }
}
render(<App />, window.document.getElementById('root'));