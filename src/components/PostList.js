import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PostBox from './PostBox';

export default function PostList(props) {

    const { userData } = props;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=> {
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=0&limit=10', {headers: {"User-Token": userData.token }});

        request.then(response => {
            setPosts([...posts, response.data.posts[0]]);
            setLoading(true);
        });

        request.catch(() => setError(true));
    }, []);

    console.log(posts);

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
                                key={post.id}
                            />
                        ))
                : <Load src='../public/images/load.gif' />
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
    width: 30vw;
    margin: 20px 40vw;
`;