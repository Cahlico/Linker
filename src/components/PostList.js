import React, { useEffect, useState, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { receivePosts } from '../functions/receivePosts';
import { postList } from '../functions/postList';
import { getPostsFromServer } from '../functions/getPostsFromServer';
import { WarningMessage, Load } from '../styles/styledPostList';
import RefreshContext from '../contexts/RefreshContext';

export default function PostList(props) {

    const { refresh, setRefresh } = useContext(RefreshContext);
    const { userData, id, hashtag, liked, timeline } = props;
    let [ posts, setPosts ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let items = [];
    const [offset, setOffset] = useState(0);
    const [more, setMore] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Houve uma falha ao obter os posts, por favor atualize a página");
    const [timer, setTimer] = useState(1);

    useEffect(() => {

        const request = getPostsFromServer(id, liked, hashtag, userData, offset, setError, setErrorMsg);

        request.then(response => {
            setLoading(false);
            receivePosts(response, setPosts, posts, setMore);
        });

        request.catch(() => setError(true));
        if(timeline) {
            const timerId = setInterval(() => setTimer(timer + 1), 15000);
            return () => clearInterval(timerId);
        }
        
    }, [refresh, timer]);

    postList(posts, setPosts, items);

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
                    ? <WarningMessage> {errorMsg} </WarningMessage>
                    : posts.length === 0
                        ? <WarningMessage>Nenhum post encontrado</WarningMessage>
                        : <InfiniteScroll
                            loadMore={load}
                            hasMore={more}
                            loader={<Load src='https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif' key={0} />}
                          >
                          {items}
                        </InfiniteScroll>
                : <Load src='https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif' />
            }
        </>
    );
}