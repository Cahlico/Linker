import styled from 'styled-components';

export const PostContainer = styled.div`
    background: #151515;
    display:flex;
    margin: 10px 0vw;
    padding: 10px 20px;
    border-radius: 13px; 
    width: 46vw;
    color: #FFF;
    position: relative;
    overflow-wrap: anywhere;

    &>a {
        width:53px;
        height:53px;
        border-radius:50%;
        margin-right: 15px;
        cursor: pointer;
    }

    div > div {
        display: flex;
        justify-content: space-between;
    }

    div > div > span {
        display: flex;
    }

    h3 {
        color: #FFF;
        font-weight:300;
        font-size:20px;
        margin-bottom:10px;
    }
    
    textarea {
        display: block;
        color: #4C4C4C;
        background: white;
        outline: none;
        border: none;
        border-radius: 3px;
        resize:none;
        font-family:inherit;
        font-size:16px;
        width:95%;
    }

    p {
        color: #B7B7B7;
    }

    span {
        color: #FFF;
        font-weight: bold;
        cursor: pointer;
    }

    svg {
        cursor: pointer;
        font-size: 26px;
        color: #FFF;

        &.likes {
            position: absolute;
            top: 80px;
            left: 32px;
        }

        &.redColored {
            color: #f0293d;
        }

        &.redColored:hover {
            color: #db3b56;
        }

        &.edit {
            color: #fce63a;
            margin-right: 7px;
        }

        &.edit:hover {
            color: #e8dd68;
        }

        &.locationPin {
            font-size: 20px;
            margin-left: 10px;
            margin-top: 1px;
        }
    }

    strong {
        position: absolute;
        top: 115px;
        left: 25px;
    }

    @media(max-width: 600px) {
        width: 100vw;
        border-radius: 2px;
        margin: 30px 0vw;
    }
`;

export const Avatar = styled.img`
    width:53px;
    height:53px;
    border-radius:50%;
    margin-right: 15px;
    cursor: pointer;
`;

export const LinkContainer = styled.a`
    margin-top: 10px;
    display: flex;
    border: 2px solid #C4C4C4;
    border-radius: 11px;
    overflow: hidden;
    height: 155px;
    cursor: pointer;

    img {
        height: 100%;
        max-width: 462px;
    }

    h4, p {
        padding: 10px;
        word-break: break-word;
        color: #B7B7B7;
    }

    p { 
        font-size:11px;
    }

    @media(max-width: 600px) {
        height: 15vh;
    }
`;

export const YoutubeContainer = styled.iframe `
    width: 38vw;
    height: 250px;
    margin-top: 10px;
    border: 2px solid #C4C4C4;
    border-radius: 11px;

    @media(max-width: 600px) {
        height: 15vh;
        width: 70vw;
    }
`