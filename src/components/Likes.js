import React, { useState, useContext, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import { showLikes } from '../functions/showLikes';

export default function Likes(props) {

    const { userInfo, refresh , setRefresh } = useContext(UserContext);
    const userData = userInfo.data;
    const { id, username } = userData.user;
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
        } else {
            request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${postId}/dislike`, likeObj, {headers: {"User-Token": userData.token }});
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
                        className='selected'
                        data-tip={showLikes(selected, username, postLikes)}
                        onMouseOver={() => {ReactTooltip.show() }}
                    />
                    <ReactTooltip />
                </>
                : <>
                    <IoIosHeartEmpty 
                        onClick={() => setLikes('like')}
                        data-tip={showLikes(selected, username, postLikes)}
                        onMouseOver={() => {ReactTooltip.show() }}
                    />
                    <ReactTooltip />
                </>
            }
        </>
    );
}