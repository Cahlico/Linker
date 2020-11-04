import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import { AnimatedSwitch } from './AnimatedSwitch';

export default function App() {
    const localData = localStorage.data !== undefined ? JSON.parse(localStorage.data) : {};
    const [userInfo, setUserInfo] = useState(localData);
    const [refresh, setRefresh] = useState(false);
    const [myPost, setMyPost] = useState(false);
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, refresh, setRefresh, myPost, setMyPost }}>
            <Router>
                <AnimatedSwitch />
            </Router>
        </UserContext.Provider>
    );
}