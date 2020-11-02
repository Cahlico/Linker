import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

import UserContext from '../contexts/UserContext';
import { receivePosts } from '../functions/receivePosts';
import { render } from '../functions/render';

export default function PostList(props) {

    const { refresh , setRefresh, myPost, setMyPost } = useContext(UserContext);
    const { userData, id, hashtag, liked } = props;
    let request;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let items = []
    const [offset, setOffset] = useState(0);
    const [more, setMore] = useState(false);
    

    useEffect(() => {

        if(id === null) {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=${offset}&limit=11`, {headers: {"User-Token": userData.token }});
        } else if (id && liked) {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked`, {headers: {"User-Token": userData.token }});
        } else if(hashtag) {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts?offset=${offset}&limit=11`, {headers: {"User-Token": userData.token }});
        } else {
            request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=${offset}&limit=11`, {headers: {"User-Token": userData.token }});            
        }

        request.then(response => {
            setLoading(false);
            receivePosts(response, setPosts, posts, myPost, setMyPost, setMore);
        });

        request.catch(() => setError(true));
        
    }, [refresh]);

    const loader = <Load src='https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif' />

    render(posts, items);

    function load() {
        if(posts.length<10) return;
        setMore(false);
        setOffset(offset+10);
        setRefresh(!refresh);
    }
    
    return (
        <>
            {!loading
                ? error
                    ? <WarningMessage>Houve uma falha ao obter os posts, por favor atualize a página</WarningMessage>
                    : posts.length === 0
                        ? <WarningMessage>Nenhum post encontrado</WarningMessage>
                        : <InfiniteScroll
                            loadMore={load}
                            hasMore={more}
                            loader={<Load src='https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif' />}
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

    @media (max-width: 600px) {
        width: 60vw;
    }
`;