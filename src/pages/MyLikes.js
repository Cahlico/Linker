import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/timeline'

export default function MyLikes() {

    const { userInfo, refresh } = useContext(UserContext);
    const userData = userInfo.data;
    const { state } = useLocation();
    const { id } = state;
    const liked = true;
    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }

    const { avatar } = userData.user;

    return (
        <>
            <Header avatar = {avatar}/>
            <MainContainer>
                <h1>My Likes</h1>
                <TrendingTopics  userData = {userData} />
            </MainContainer>
            <PostList userData={userData} refresh={refresh} id={id} liked={liked} />
        </>
    );

}