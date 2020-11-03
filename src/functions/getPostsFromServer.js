import axios from 'axios';

export function getPostsFromServer(id, liked, hashtag, userData, offset) {
    
    let request;
    
    if(id === null) {
        request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=${offset}&limit=11`, {headers: {"User-Token": userData.token }});
    } else if (id && liked) {
        request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked`, {headers: {"User-Token": userData.token }});
    } else if(hashtag) {
        request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts?offset=${offset}&limit=11`, {headers: {"User-Token": userData.token }});
    } else {
        request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=${offset}&limit=11`, {headers: {"User-Token": userData.token }});            
    }

    return request;
}