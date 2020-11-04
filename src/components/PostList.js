import React, { useEffect, useState, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import UserContext from '../contexts/UserContext';
import { receivePosts } from '../functions/receivePosts';
import { render } from '../functions/render';
import { getPostsFromServer } from '../functions/getPostsFromServer';
import { WarningMessage, Load } from '../styles/styledPostList';

export default function PostList(props) {

    const { refresh , setRefresh, myPost, setMyPost } = useContext(UserContext);
    const { userData, id, hashtag, liked } = props;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let items = []
    const [offset, setOffset] = useState(0);
    const [more, setMore] = useState(false);

    useEffect(() => {

        const request = getPostsFromServer(id, liked, hashtag, userData, offset);

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