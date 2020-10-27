import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';
import PostList from '../components/PostList';

import { MainContainer } from '../styles/timeline'

export default function Timeline() {
    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data

    return (
        <>
            <Header/>
            <MainContainer>
                <h1>timeline</h1>
                <InputPost userData={userData} />
            </MainContainer>
            <PostList userData={userData} />
        </>
    )
}

