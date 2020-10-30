import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

import PostBox from './PostBox';
import UserContext from '../contexts/UserContext';

export default function PostList(props) {

    const { refresh , setRefresh } = useContext(UserContext);
    const { userData, id, hashtag, liked } = props;
    let request;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [offset, setOffset] = useState(0);
    const [more, setMore] = useState(true);

    useEffect(()=> {
        
        if(id === null) {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=${offset}&limit=10`, {headers: {"User-Token": userData.token }});
        } else if (id && liked) {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked`, {headers: {"User-Token": userData.token }});
        } else if(id) {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=${offset}&limit=10`, {headers: {"User-Token": userData.token }});
        } else {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts?offset=${offset}&limit=10`, {headers: {"User-Token": userData.token }});
            setLoading(false);
        }

        request.then(response => {
            setLoading(true);
            if(response.data.posts.length===0) return;
            setPosts([...posts,...response.data.posts]);
            setMore(true);
        });


        request.catch(() => setError(true));
    }, [refresh]);

    
    let items = []

    const loader = <Load src='https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif' />

    function render() {

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
    }render();

    function load() {
        if(posts.length<10) return;
        setMore(false);
        setOffset(offset+10);
        setRefresh(!refresh);
    }
    
    return (
        <>
            {loading
                ? error
                    ? <WarningMessage>Houve uma falha ao obter os posts, por favor atualize a página</WarningMessage>
                    : posts.length === 0
                        ? <WarningMessage>Nenhum post encontrado</WarningMessage>
                        : <InfiniteScroll
                            loadMore={load}
                            hasMore={more}
                          >
                          {items}
                        </InfiniteScroll>
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