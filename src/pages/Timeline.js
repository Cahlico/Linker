import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/timeline'

export default function Timeline() {
    
    const { userInfo, refresh , setRefresh } = useContext(UserContext);
    const userData = userInfo.data;
    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }
    const { avatar, id } = userData.user;

    return (
        <>
            <Header avatar={avatar} id={id}/>
            <MainContainer>
                <h1>timeline</h1>
                <InputPost 
                userData = {userData} 
                refresh = {refresh}
                setRefresh = {setRefresh}
                />
                <TrendingTopics 
                userData = {userData} 
                refresh = {refresh}
                setRefresh = {setRefresh}
                />
                <PostList userData={userData} id={null} />
            </MainContainer>
            
        </>
    );
}

