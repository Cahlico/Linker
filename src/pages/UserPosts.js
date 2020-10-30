import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/timeline'

export default function Timeline() {
    const { userInfo, refresh } = useContext(UserContext);
    const userData = userInfo.data;
    const { state } = useLocation();
    const { id, username } = state;
    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }

    const userId = userData.user.id;
    const { avatar } = userData.user;

    return (
        <>
            <Header avatar = {avatar}/>
            <MainContainer>
                {id === userId
                    ? <h1>My posts</h1>
                    : <h1>{username}'s posts</h1>
                }
                <TrendingTopics  userData = {userData} />
                <PostList userData={userData} id={id} />
            </MainContainer>
            
        </>
    );
}