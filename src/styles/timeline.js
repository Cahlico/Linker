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

    h1 {
        font-family: 'Passion one', sans-serif;
        font-weight:bold;
        color:white;
        font-size:49px;
    }

    div {
        display: flex;
        align-items: center;
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
`

export const MainContainer = styled.main `
    padding-top: 100px;
    padding-left: 17vw;
    display: flex;
    font-family: 'Lato',sans-serif;
    flex-direction: column;
    align-items: flex-start;

    & > h1 {
        color:white;
        font-weight:bold;
        font-size:43px;
        font-family: 'Oswald' , sans-serif;
        margin-bottom:25px;
        padding: 30px 0;
    }

`

export const InputContainer = styled.article `
    background: #FFF;
    display:flex;
    padding: 10px 20px;
    border-radius: 13px; 
    width: 46vw;

    h1 {
        color:#707070;
        font-weight:300;
        font-size:20px;
        margin-bottom:10px;
    }

    img {
        width:53px;
        height:53px;
        border-radius:50%;
        margin-right: 15px;

    }

    input {
        background: #EFEFEF;
        font-size:15px;
        font-family:inherit;
        font-weight:300;
        outline:none;
        border: none;
        width:38vw;
        margin-bottom:5px;
        padding: 5px;
        border-radius: 4px;

    }

    textarea {
        outline:none;
        border:none;
        background: #EFEFEF;
        width:100%;
        resize: none;
        padding: 5px;
        border-radius: 4px;
        font-family:inherit;
        font-size:15px;        
        font-weight:300;
    }

    div div {
        display:flex;
        justify-content:flex-end;
    }

    button {
        font-family: inherit;
        font-size: 14px;
        font-weight: 700;
        border: none;
        padding: 5px 20px;
        background: #1877F2;
        color: white;
        border-radius: 5px;
        margin-top: 5px;
        outline: none;
        cursor: pointer;
    }
`

export const TrendContainer = styled.aside ` 
    width:200px;
    height:200px;
    background:white;
    position: fixed;
    right: 60px;

`








