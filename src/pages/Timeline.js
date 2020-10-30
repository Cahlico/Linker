import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/styledTimeline'

export default function Timeline() {
    
    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data;
    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }
    const { avatar, id } = userData.user;

    return (
        <>
            <Header avatar={avatar} id={id}/>
            <MainContainer>
                <span><h1>timeline</h1></span>
                <InputPost 
                userData = {userData} 
                />
                <TrendingTopics 
                userData = {userData} 
                />
                <PostList userData={userData} id={null} />
            </MainContainer>
            
        </>
    );
}

