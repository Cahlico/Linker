import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import Header from '../components/Header';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/styledTimeline'

export default function MyLikes() {

    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data;
    const { state } = useLocation();
    const { id } = state;
    const liked = true;
    
    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }

    const userId = userData.user.id;
    const { avatar } = userData.user;

    return (
        <>
            <Header avatar = {avatar} id={userId} />
            <MainContainer>
                <span><h1>My Likes</h1></span>
                <TrendingTopics  userData = {userData} />
                <PostList userData={userData} id={id} liked={liked} />
            </MainContainer>
        </>
    );
}