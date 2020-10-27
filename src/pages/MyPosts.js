import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';

import { MainContainer } from '../styles/timeline'

export default function MyPosts() {
    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data

    return (
        <>
            <Header/>
            <MainContainer>
                <h1>MyPosts</h1>
            </MainContainer>
        </>
    )
}