import axios from 'axios';

export function getPostsFromServer(id, liked, hashtag, userData, offset, setError, setErrorMsg) {
    
    let request;
    
    if(id === null) {
        request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows", {headers: {"User-Token": userData.token }});
        request.then(response => {
            if(response.data.users.length === 0) {
                setErrorMsg("Você não segue ninguém ainda, procure por perfis na busca");
                setError(true);
            }
        })
        request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/following/posts?offset=${offset}&limit=11`, {headers: {"User-Token": userData.token }});
    } else if (id && liked) {
        request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked`, {headers: {"User-Token": userData.token }});
    } else if(hashtag) {
        request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts?offset=${offset}&limit=11`, {headers: {"User-Token": userData.token }});
    } else {
        request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=${offset}&limit=11`, {headers: {"User-Token": userData.token }});         
    }

    return request;
}