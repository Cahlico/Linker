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

    /*let allPosts = [...posts, ...resp];
    let ordPosts = [];
    console.log(allPosts)

    setPosts([...ordPosts]);*/

    if(myPost) {
        setPosts([...resp,...posts]);
        setMyPost(false);
    } else {
        setPosts([...posts,...resp]);
    }

    if(nextPost.id === null) return;
    setMore(true);
}