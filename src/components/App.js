import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import RefreshContext from '../contexts/RefreshContext';
import PostsContext from '../contexts/PostsContext';
import { AnimatedSwitch } from './AnimatedSwitch';

export default function App() {
    const localData = localStorage.data !== undefined ? JSON.parse(localStorage.data) : {};
    const [userInfo, setUserInfo] = useState(localData);
    const [refresh, setRefresh] = useState(false);
    const [myPost, setMyPost] = useState(false);
    const [posts, setPosts] = useState([]);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, myPost, setMyPost }}>
            <RefreshContext.Provider value={{ refresh, setRefresh }}>
                <PostsContext.Provider value={{ posts, setPosts }}>
                    <Router>
                        <AnimatedSwitch />
                    </Router>
                </PostsContext.Provider>
            </RefreshContext.Provider>
        </UserContext.Provider>
    );
}