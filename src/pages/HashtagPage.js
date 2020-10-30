import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/timeline'

export default function HashtagPage() {
    
    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data;
    const { state } = useLocation();
    const hashtag = state;
    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }

    const { avatar, id } = userData.user;

    return (
        <>
            <Header avatar = {avatar} id={id} />
            <MainContainer>
                <h1># {hashtag}</h1>
                <TrendingTopics userData = {userData} />
                <PostList userData={userData} hashtag={hashtag} />
            </MainContainer>
            
        </>
    );
}