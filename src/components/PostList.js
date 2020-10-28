import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PostBox from './PostBox';

export default function PostList(props) {

    const { userData, refresh, id, hashtag } = props;
    let request;
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=> {

        if(id === null) {
            request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=0&limit=10', {headers: {"User-Token": userData.token }});
        } else if (id) {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=0&limit=10`, {headers: {"User-Token": userData.token }});
        } else {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts?offset=0&limit=2`, {headers: {"User-Token": userData.token }});
        }

        request.then(response => {
            setPosts(response.data.posts);
            setLoading(true);
        });

        request.catch(() => setError(true));
    }, [refresh]);

    return (
        <>
            {loading
                ? error
                    ? <WarningMessage>Houve uma falha ao obter os posts, por favor atualize a página</WarningMessage>
                    : posts.length === 0
                        ? <WarningMessage>Nenhum post encontrado</WarningMessage>
                        : posts.map(post => (
                            <PostBox
                                imgSrc={post.linkImage}
                                link={post.link}
                                linkDescription={post.linkDescription}
                                linkTitle={post.linkTitle}
                                text={post.text}
                                user={post.user}
                                key={post.id}
                            />
                        ))
                : <Load src='https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif' />
            }
        </>
    );
}

const WarningMessage = styled.h4`
    text-align: center;
    font-size: 56px;
    color: #FFF;
`;

const Load = styled.img`
    width: 15vw;
    margin: 0 20vw;
`;