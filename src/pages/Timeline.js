import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/timeline'

export default function Timeline() {
    const { userInfo, refresh , setRefresh } = useContext(UserContext);
    const userData = userInfo.data
    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }
    const { avatar } = userData.user;
    console.log(userData);
    return (
        <>
            <Header avatar = {"https://pm1.narvii.com/6055/c57c6dd83178676ae35485d77bd40ffb5b34ccf6_hq.jpg"}/>
            <MainContainer>
                <h1>timeline</h1>
                <InputPost 
                userData = {userData} 
                refresh = {refresh}
                setRefresh = {setRefresh}
                />
                {/* <TrendingTopics/> */}
            </MainContainer>
            <PostList userData={userData} refresh={refresh} />
        </>
    )
}

