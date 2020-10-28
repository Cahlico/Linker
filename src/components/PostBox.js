import React from 'react';
import styled from 'styled-components';

export default function PostBox(props) {

    const { imgSrc, link, linkDescription, linkTitle, text, user } = props;
    const { id, username, avatar } = user;

    return (
        <PostContainer>
            <Avatar src={avatar} />

            <div>
                <h3>{username}</h3>
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

const PostContainer = styled.div`
    background: #151515;
    display:flex;
    margin: 20px 17vw;
    padding: 10px 20px;
    border-radius: 13px; 
    width: 46vw;
    color: #FFF;

    h3 {
        color: #FFF;
        font-weight:300;
        font-size:20px;
        margin-bottom:10px;
    }
    
    p {
        color: #B7B7B7;
    }
`;

const Avatar = styled.img`
    width:53px;
    height:53px;
    border-radius:50%;
    margin-right: 15px;
`;

const LinkContainer = styled.a`
    margin-top: 10px;
    display: flex;
    border: 2px solid #C4C4C4;
    border-radius: 11px;
    overflow: hidden;
    height: 155px;

    img {
        height: 100%;
    }

    h4, p {
        padding: 10px;
        word-break: break-word;
        color: #B7B7B7;
    }

    p { 
        font-size:11px;
    }
`;