import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactHashtag from "react-hashtag";

import { PostContainer, Avatar, LinkContainer, Hashtag } from '../styles/styledPostBox';

export default function PostBox(props) {

    const { imgSrc, link, linkDescription, linkTitle, text, user } = props;
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