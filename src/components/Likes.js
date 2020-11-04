import React, { useState, useContext, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import { showLikes } from '../functions/showLikes';
import RefreshContext from '../contexts/RefreshContext';

export default function Likes(props) {

    const { userInfo } = useContext(UserContext);
    const { refresh, setRefresh } = useContext(RefreshContext);
    const userData = userInfo.data;
    const { id, username } = userData.user;
    const [mylike, setMylike] = useState(0);
    const [selected, setSelected] = useState(false);
    const { postId, postUsername, userId, postLikes } = props;
    const likeObj = { id:userId, username: postUsername };

    useEffect(() => {
        postLikes.forEach((i) => {
            if((id === i.userId || id === i.id)) setSelected(true);
        });
    }, []);
    
    function setLikes(type) {

        let request;
        if(type === 'like') {
            request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${postId}/like`, likeObj, {headers: {"User-Token": userData.token }});
            setMylike(mylike + 1);
        } else {
            request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${postId}/dislike`, likeObj, {headers: {"User-Token": userData.token }});
            setMylike(mylike - 1);
        }

        request.then(() => setRefresh(!refresh));
        setSelected(!selected);
    }

    return (
        <>
            {selected
                ? <>
                    <IoIosHeart 
                        onClick={() => setLikes('dislike')}
                        className='redColored likes'
                        data-tip={showLikes(selected, username, postLikes)}
                        onMouseOver={() => {ReactTooltip.show() }}
                    />
                    <ReactTooltip />
                    <strong>{postLikes.length + mylike} likes</strong>
                </>
                : <>
                    <IoIosHeartEmpty 
                        onClick={() => setLikes('like')}
                        className='likes'
                        data-tip={showLikes(selected, username, postLikes)}
                        onMouseOver={() => {ReactTooltip.show() }}
                    />
                    <ReactTooltip />
                    <strong>{postLikes.length + mylike} likes</strong>
                </>
            }
        </>
    );
}