import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/timeline'

export default function Timeline() {
    const { userInfo, refresh , setRefresh } = useContext(UserContext);
    const userData = userInfo.data;
    const { state } = useLocation();
    const { id, username } = state;
    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }
    const { avatar } = userData.user;

    return (
        <>
            <Header avatar = {avatar}/>
            <MainContainer>
                <h1>{username}'s posts</h1>
                {/* <TrendingTopics/> */}
            </MainContainer>
            <PostList userData={userData} refresh={refresh} id={id} />
        </>
    )
}
