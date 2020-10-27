import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserContext from '../contexts/UserContext';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Timeline from '../pages/Timeline';

export default function App() {

    const [userInfo, setUserInfo] = useState({});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            <Router>
                <Switch>
                    <Route path="/Signup" component={SignUp} />
                    <Route path="/Timeline" component={Timeline} />
                    <Route path="/" component={Login} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}