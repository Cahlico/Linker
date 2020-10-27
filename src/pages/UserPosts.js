import React, { useContext, useEffect } from 'react';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';

import { MainContainer } from '../styles/timeline'

export default function UserPosts() {
    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data

    useEffect(() => {

        /*`const request = axios.get(https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${userId}/posts?offset=0&limit=2`)

        request.then(() => {

        })
        */
    });

    return (
        <>
            <Header/>
            <MainContainer>
                <h1>Username's Posts</h1>
            </MainContainer>
        </>
    )
}