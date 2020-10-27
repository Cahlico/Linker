import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UserContext from '../contexts/UserContext';

export default function App() {

    const [userInfo, setUserInfo] = useState({});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            <Router>
                <Switch>
                    <Route path="/Signup" component={SignUp} />
                    <Route path="/" component={Login} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}