import React from 'react';
import styled from 'styled-components';

export default function PostBox(props) {

    const { imgSrc, link, linkDescription, linkTitle, text } = props;

    return (
        <PostContainer>
            <img src={imgSrc} />
            <div>
                <h3>{linkTitle}</h3>
                <p>{text}</p>
                <a>{link}{linkDescription}</a>
            </div>
        </PostContainer>
    );
}

const PostContainer = styled.div`
    background: #151515;
    display:flex;
    margin: 20px 17vw;
    border-radius: 13px; 
    width: 46vw;
    color: #FFF;
    overflor: hidden;

    h3 {
        color:#707070;
        font-weight:300;
        font-size:20px;
        margin-bottom:10px;
    }

    img {
        width:53px;
        height:53px;
        border-radius:50%;
        margin-right: 15px;

    }

    div div {
        display:flex;
        justify-content:flex-end;
    }
`;