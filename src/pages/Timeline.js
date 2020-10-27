import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/timeline'

export default function Timeline() {
    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data
    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }
    const { avatar } = userData.user;
    console.log(userData);
    return (
        <>
            <Header avatar = {avatar}/>
            <MainContainer>
                <h1>timeline</h1>
                <InputPost userData = {userData} />
                {/* <TrendingTopics/> */}
            </MainContainer>
            <PostList userData={userData} />
        </>
    )
}

