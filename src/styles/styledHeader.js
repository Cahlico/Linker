import styled from 'styled-components';

export const HeaderContainer = styled.header `
    position:fixed;
    top:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#151515;
    padding:5px 20px;
    z-index:100;

    h1 {
        font-family: 'Passion one', sans-serif;
        font-weight:bold;
        color:white;
        font-size:49px;
    }

    input {
        width: 38vw;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        outline-style: none;
        font-size: 16px;
    }

    a {
        color: inherit;
    }

    .show-menu {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    img {
        width:53px;
        height:53px;
        border-radius:50%;
        cursor: pointer;
    }
    
    svg {
        color: white;
        margin-right: 5px;
        cursor: pointer;
        font-size: 25px;
    }

    @media(max-width: 600px) {
        input {
            width: 98vw;
            z-index: -10;
        }
    }
`;

export const Menu = styled.div `
    position: fixed;
    font-family: 'Lato',sans-serif;
    font-size:17px;
    background: #171717;
    right: 0;
    top: ${props=>props.isDroped?"63px":"-34px"};
    transition: top .5s ease-in-out;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 17px;
    color:white;
    border-radius: 0px 0px 0px 20px;
    z-index:10;

    a {
        color:inherit;
        display:block;
    }

    a:first-child { 
        margin-bottom: 5px;
    }

    button {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        margin-top: 2px;
        cursor: pointer;
    }

    @media(max-width: 600px) {
        right: 0;
        top: ${props=>props.isDroped?"103px":"-34px"};
    }
`;

export const SearchContainer = styled.div`
    position: relative;

    & > svg {
        color: #adaaaa;
        cursor: auto;
        position: fixed;
        top: 19px;
        left: 66%;
    }

    @media(max-width: 600px) {
        position: absolute;
        top: 70px;
        left: 1vw;

        & > svg {
            top: 76px;
            left: 90%;
        }
    }
`;

export const UsersContainer = styled.div`
    width: 38vw;
    padding: 40px 10px 0px;
    border-radius: 5px;
    font-size: 16px;
    background-color: #E7E7E7;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;

    a {
        display: block;
        margin-bottom: 20px;
        z-index: 9;
    }

    img, p span {
        display: inline-block;
        padding: 10px;
    }
    
    p {
        margin-top: -38px;
        margin-left: 55px;
        font-weight: 300;
    }

    span {
        margin-top: -48px;
        color: #828282;
    }

    @media(max-width: 600px) {
        width: 98vw;
    }
`;