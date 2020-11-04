import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import TrendingTopics from '../components/TrendingTopics';
import PostList from '../components/PostList';
import { postFollow } from '../functions/postFollow';
import { MainContainer } from '../styles/styledTimeline'

export default function UserPosts() {

    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data;
    const { state } = useLocation();
    const { id, username } = state;
    const [isFollowing, setIsFollowig] = useState(false);
    const [clicked, setClicked] = useState(false);
    const userId = userData.user.id;
    const { avatar } = userData.user;

    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }

    useEffect(() => {
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows', {headers: {"User-Token": userData.token }});

        request.then(response => {
            response.data.users.forEach(i => {
                if(i.id === id) {
                    setIsFollowig(true);
                }
            });
        });
    }, []);

    return (
        <>
            <Header avatar = {avatar} id={userId} />
            <MainContainer>
                {id === userId
                    ? <span><h1>My posts</h1></span>
                    : <span>
                        <h1>{username}'s posts</h1>
                        {isFollowing
                            ? <button onClick={() => postFollow(clicked, setClicked, id, userData, isFollowing, setIsFollowig)} className='unfollow'>unfollow</button>
                            : <button onClick={() => postFollow(clicked, setClicked, id, userData, isFollowing, setIsFollowig)}>follow</button>
                        }
                    </span>
                }
                <TrendingTopics  userData = {userData} />
                <PostList userData={userData} id={id} />
            </MainContainer>
            
        </>
    );
}