import React, { useState, useContext, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import axios from 'axios';

import UserContext from '../contexts/UserContext';

export default function Likes(props) {

    const { userInfo, refresh , setRefresh } = useContext(UserContext);
    const userData = userInfo.data;
    const { id } = userData.user;
    let [selected, setSelected] = useState(false);
    const { postId, postUsername, userId, postLikes } = props;
    const likeObj = { id:userId, username: postUsername };

    function setLikes(type) {

        let request;

        if(type === 'like') {
            request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${postId}/like`, likeObj, {headers: {"User-Token": userData.token }});
        } else {
            request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${postId}/dislike`, likeObj, {headers: {"User-Token": userData.token }});
        }

        request.then(() => setRefresh(!refresh));

        setSelected(!selected);
    }

    postLikes.forEach((i) => {
        if(id === i.userId) {
            selected = true;
        }
    });

    return (
        <>
            {selected
                ? <IoIosHeart onClick={() => setLikes('dislike')} className='selected' />
                : <IoIosHeartEmpty onClick={() => setLikes('like')} />
            }
        </>
    );
}