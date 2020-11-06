export function showLikes(selected, username, postLikes) {
    
    let likeNums;

    if(selected) {
        switch(postLikes.length) {
            case 0:
                likeNums = 'no likes yet';
                break;
            case 1:
                likeNums = `you liked the post`;
                break;
            case 2:
                likeNums = `you and 
                ${username === postLikes[0]['user.username'] || username === postLikes[0].username 
                    ? postLikes[1]['user.username'] || postLikes[1].username 
                    : postLikes[0]['user.username'] || postLikes[0].username} 
                    liked the post`;
                break;
            default:
                likeNums = `you, 
                ${username === postLikes[0]['user.username'] || username === postLikes[0].username 
                    ? postLikes[1]['user.username'] || postLikes[1].username 
                    : postLikes[0]['user.username'] || postLikes[0].username} 
                    , and ${postLikes.length - 2} others liked the post`;
        }
    } else {
        switch(postLikes.length) {
            case 0:
                likeNums = 'no likes yet';
                break;
            case 1:
                likeNums = `${postLikes[0]['user.username'] || postLikes[0].username} liked the post`;
                break;
            case 2:
                likeNums = `${postLikes[0]['user.username'] || postLikes[0].username} and ${postLikes[1]['user.username'] || username === postLikes[0].username} liked the post`;
                break;
            default:
                likeNums = `${postLikes[0]['user.username'] || postLikes[0].username}, ${postLikes[1]['user.username'] || postLikes[0].username} , and ${postLikes.length - 2} others liked the post`;
        }
    }

    return likeNums;
}