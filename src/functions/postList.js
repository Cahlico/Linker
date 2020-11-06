import React from 'react';
import PostBox from '../components/PostBox';

export function postList(posts, setPosts ,items) {
    
    if(posts.length === 0) return;

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
                geolocation={post.geolocation}
                posts={posts}
                setPosts={setPosts}
                key={post.id}
            />
        );
    });
}