import React, { useState, useContext, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';

import UserContext from '../contexts/UserContext';

export default function Likes(props) {

    const { userInfo, refresh , setRefresh } = useContext(UserContext);
    const userData = userInfo.data;
    const { id, username } = userData.user;
    let [selected, setSelected] = useState(false);
    const { postId, postUsername, userId, postLikes } = props;
    const likeObj = { id:userId, username: postUsername };

    postLikes.forEach((i) => {
        if(id === i.userId || id === i.id) {
            selected = true;
        }
    });
    
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

    function showLikes() {
        let likeNums;
    
        if(selected) {
            switch(postLikes.length) {
                case 0:
                    likeNums = 'no likes yet';
                    break;
                case 1:
                    likeNums = `you liked the post`;
                    break;
                case 2:
                    likeNums = `you and 
                    ${username === postLikes[0]['user.username'] || username === postLikes[0].username 
                        ? postLikes[1]['user.username'] || postLikes[1].username 
                        : postLikes[0]['user.username'] || postLikes[0].username} 
                        liked the post`;
                    break;
                default:
                    likeNums = `you, 
                    ${username === postLikes[0]['user.username'] || username === postLikes[0].username 
                        ? postLikes[1]['user.username'] || postLikes[1].username 
                        : postLikes[0]['user.username'] || postLikes[0].username} 
                        , and ${postLikes.length - 2} others liked the post`;
            }
        } else {
            switch(postLikes.length) {
                case 0:
                    likeNums = 'no likes yet';
                    break;
                case 1:
                    likeNums = `${postLikes[0]['user.username'] || postLikes[0].username} liked the post`;
                    break;
                case 2:
                    likeNums = `${postLikes[0]['user.username'] || postLikes[0].username} and ${postLikes[1]['user.username'] || username === postLikes[0].username} liked the post`;
                    break;
                default:
                    likeNums = `${postLikes[0]['user.username'] || postLikes[0].username}, ${postLikes[1]['user.username'] || postLikes[0].username} , and ${postLikes.length - 2} others liked the post`;
            }
        }
    
        return likeNums;
    }

    return (
        <>
            {selected
                ? <>
                    <IoIosHeart 
                        onClick={() => setLikes('dislike')} 
                        className='selected'
                        data-tip={showLikes()}
                        onMouseOver={() => {ReactTooltip.show() }}
                    />
                    <ReactTooltip />
                </>
                : <>
                    <IoIosHeartEmpty 
                        onClick={() => setLikes('like')}
                        data-tip={showLikes()}
                        onMouseOver={() => {ReactTooltip.show() }}
                    />
                    <ReactTooltip />
                </>
            }
        </>
    );
}