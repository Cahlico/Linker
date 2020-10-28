import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserContext from '../contexts/UserContext';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Timeline from '../pages/Timeline';
import UserPosts from '../pages/UserPosts';
import HashtagPage from '../pages/HashtagPage';

export default function App() {

    const [userInfo, setUserInfo] = useState({});
    const [refresh, setRefresh] = useState(false)
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, refresh, setRefresh }}>
            <Router>
                <Switch>
                    <Route path="/Signup" component={SignUp} />
                    <Route path="/Timeline" component={Timeline} />
                    <Route path="/User:id" component={UserPosts} />
                    <Route path="/Hashtag:hashtag" component={HashtagPage} />
                    <Route path="/" component={Login} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}