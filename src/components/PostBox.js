import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactHashtag from "react-hashtag";

import { PostContainer, Avatar, LinkContainer } from '../styles/styledPostBox';
import UserContext from '../contexts/UserContext';
import Likes from './Likes';

export default function PostBox(props) {

    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data;
    const { imgSrc, link, linkDescription, linkTitle, text, user, postId, postLikes } = props;
    const { id, username, avatar } = user;
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
                <Link to={{ pathname:`/UserPosts:${id}`, state: { id, username }}} >
                    <h3>{username}</h3>
                </Link>

                <p>
                    <ReactHashtag
                        onHashtagClick={hashtagValue => goToHashtagPage(hashtagValue)}
                    >
                        {text}
                    </ReactHashtag>
                </p>

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