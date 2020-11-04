import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import RefreshContext from '../contexts/RefreshContext';
import { AnimatedSwitch } from './AnimatedSwitch';

export default function App() {
    const localData = localStorage.data !== undefined ? JSON.parse(localStorage.data) : {};
    const [userInfo, setUserInfo] = useState(localData);
    const [refresh, setRefresh] = useState(false);
    const [myPost, setMyPost] = useState(false);
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, myPost, setMyPost }}>
            <RefreshContext.Provider value={{ refresh, setRefresh }}>
                <Router>
                    <AnimatedSwitch />
                </Router>
            </RefreshContext.Provider>
        </UserContext.Provider>
    );
}