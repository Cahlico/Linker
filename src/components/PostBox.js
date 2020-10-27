import React from 'react';

export default function PostBox(props) {

    const { imgSrc, link, linkDescription, linkTitle, text } = props;

    return (
        <>
            <img src={imgSrc} />
            <div>
                <h3>{linkTitle}</h3>
                <p>{text}</p>
                <a>{link}{linkDescription}</a>
            </div>
        </>
    );
}