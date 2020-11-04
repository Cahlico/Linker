import axios from 'axios';

export function postFollow(clicked, setClicked, id, userData, isFollowing, setIsFollowig) {

    if(clicked) return;
    let request;

    if(isFollowing) {
        request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/unfollow`, id, {headers: {"User-Token": userData.token }});
    } else {
        request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/follow`, id,{headers: {"User-Token": userData.token }});
    }

    request.then(() => {
        setIsFollowig(!isFollowing);
        setClicked(false);
    });

    request.catch(() => {
        alert('Não foi possível realizar a operação');
        setClicked(false);
    });
}