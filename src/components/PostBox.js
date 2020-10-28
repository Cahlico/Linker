import React from 'react';
import { Link } from 'react-router-dom';

import { PostContainer, Avatar, LinkContainer } from '../styles/styledPostBox';

export default function PostBox(props) {

    const { imgSrc, link, linkDescription, linkTitle, text, user } = props;
    const { id, username, avatar } = user;
    console.log(id);

    return (
        <PostContainer>
            <Link to={{ pathname:`/UserPosts:${id}`, state: { id, username }}} >
                <Avatar src={avatar} />
            </Link>

            <div>
                <Link to={{ pathname:`/UserPosts:${id}`, state: { id, username }}} >
                    <h3>{username}</h3>
                </Link>
                <p>{text}</p>
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