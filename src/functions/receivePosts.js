export function receivePosts(response, setPosts, posts, myPost, setMyPost, setMore) {
    let resp = [];
    let nextPost = { id: null };
    let findEqual;
    
    response.data.posts.forEach((post,i) => {
        if( i < 10 ) resp.push(post);
        else nextPost = post;
    });

    resp = resp.filter(post=> {
        findEqual = posts.find( p => {
            return p.id === post.id;
        });
        if(findEqual) return false;
        else return true;
    });

    let ordPosts = [...posts, ...resp];

    for (let i = 0; i < ordPosts.length - 1; i++) {
        for (let j = i; j < ordPosts.length - 1; j++) {
            if(ordPosts[i].id < ordPosts[j].id) {
                console.log('aq')
                let aux = ordPosts[i];
                ordPosts[i] = ordPosts[j];
                ordPosts[j] = aux;
            }
        }
    }

    if(myPost) {
        setPosts([...resp, ...posts]);
        setMyPost(false);
    } else setPosts([...ordPosts]);

    if(nextPost.id === null) return;
    setMore(true);
}