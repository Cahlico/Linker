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

    div > div {
        display: flex;
        justify-content: space-between;
    }

    h3 {
        color: #FFF;
        font-weight:300;
        font-size:20px;
        margin-bottom:10px;
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

        &.selected {
            color: #f0293d;
        }
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