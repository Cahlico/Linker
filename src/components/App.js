import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from '../pages/Login';
import Timeline from '../pages/Timeline'

export default function App() {

    return (
        <>
        <Router>
            <Switch>
                <Route path="/" component={Login} />
            </Switch>
        </Router>
        </>
    )
}