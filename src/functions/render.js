import React from 'react';
import PostBox from '../components/PostBox';

export function render(posts, items) {
    
    if(posts.length===0) return;
        
    posts.map(post => {
        items.push(
            <PostBox
                imgSrc={post.linkImage}
                link={post.link}
                linkDescription={post.linkDescription}
                linkTitle={post.linkTitle}
                text={post.text}
                user={post.user}
                postId={post.id}
                postLikes={post.likes}
                key={post.id}
            />
        );
    });
}