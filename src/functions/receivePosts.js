export function receivePosts(response, setPosts, posts, myPost, setMyPost, setMore, id) {
    let resp = [];
    let nextPost = { id: null };
    let findEqual;
    
    response.data.posts.forEach((post,i) => {
        if( i < 10 ) resp.push(post);
        else nextPost = post;
    });

    resp = resp.filter(post=> {
        findEqual = posts.find( p => {
            if(p.id === post.id) {
                return true;
            }
        });
        if(findEqual) return false;
        else return true;
    });

    let ordPosts = [...resp, ...posts];

    for (let i = 0; i < ordPosts.length - 1; i++) {
        for (let j = i; j < ordPosts.length - 1; j++) {
            if(ordPosts[i].id < ordPosts[j].id) {
                let aux = ordPosts[i];
                ordPosts[i] = ordPosts[j];
                ordPosts[j] = aux;
            }
        }
    }

    setPosts(ordPosts);

    if(nextPost.id === null) return;
    setMore(true);
}