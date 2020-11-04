import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { Link, useHistory } from 'react-router-dom';
import ReactHashtag from "react-hashtag";
import { FiEdit } from 'react-icons/fi';

import { PostContainer, Avatar, LinkContainer } from '../styles/styledPostBox';
import Likes from './Likes';
import Edit from './Edit';
import Delete from './Delete';

export default function PostBox(props) {

    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data;
    const myId = userData.user.id;
    const { imgSrc, link, linkDescription, linkTitle, text, user, postId, postLikes } = props;
    const { id, username, avatar } = user;
    const [postText, setPostText] = useState(text);
    const [ edit, setEdit ] = useState(false);
    const history = useHistory();

    function goToHashtagPage(hashtagValue) {
        hashtagValue = hashtagValue.slice(1);
        history.push(`/HashtagPage:${hashtagValue}`, hashtagValue);
    }
    
    return (
        <PostContainer>

            <Link to={{ pathname:`/UserPosts:${id}`, state: { id, username }}} >
                <Avatar src={avatar} />
            </Link>

            <Likes postId={postId} username={username} userId={id} postLikes={postLikes} />
        
            <div>
                <div>
                    <Link to={{ pathname:`/UserPosts:${id}`, state: { id, username }}} >
                        <h3>{username}</h3>
                    </Link>
                    <div>
                        {
                            myId === id
                                ? <>
                                    <FiEdit onClick={() => setEdit(!edit)} />
                                    <Delete postId={postId} />
                                </>
                                : ''
                        }
                    </div>
                </div>
                
                {edit
                    ? <Edit
                        postText={postText}
                        setEdit={setEdit}
                        postId={postId}
                        setPostText={setPostText}
                        />
                    : <p>
                        <ReactHashtag
                            onHashtagClick={hashtagValue => goToHashtagPage(hashtagValue)}
                        >
                            {postText}
                        </ReactHashtag>
                    </p>
                }

                <LinkContainer href={link}>
                    <div>
                        <h4>{linkTitle}</h4>
                        <p>{linkDescription}</p>
                        <p>{link}</p>
                    </div>
                    <img src={imgSrc} />
                </LinkContainer>
            </div>
        </PostContainer>
    );
}