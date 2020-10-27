import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserContext from '../contexts/UserContext';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Timeline from '../pages/Timeline';
import MyPosts from '../pages/MyPosts';
import UserPosts from '../pages/UserPosts';
import HashtagPage from '../pages/HashtagPage';

export default function App() {

    const [userInfo, setUserInfo] = useState({});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            <Router>
                <Switch>
                    <Route path="/Signup" component={SignUp} />
                    <Route path="/Timeline" component={Timeline} />
                    <Route path="/MyPosts" component={MyPosts} />
                    <Route path="/User:id" component={UserPosts} />
                    <Route path="/Hastag:hastag" component={HashtagPage} />
                    <Route path="/" component={Login} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}