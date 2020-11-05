import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    @media (max-width: 600px) {
        display: block;
    }
`;

export const LoginTitle = styled.div`
    padding: 30vh 8vw;
    width: 75vw;
    height: 100vh;
    color: #FFF;
    background-color: #151515;
    font-weight: bold;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

    h1 {
        font-family: 'Passion One', cursive;
        font-size: 106px;
    }

    h2 {
        font-size: 43px;
    }

    @media (max-width: 600px) {
        padding: 5vw;
        width: 100vw;
        height: 35vh;
        text-align: center;

        h1 {
            font-size: 24vw;
        }

        h2 {
            font-size: 10vw;
        }
    }
`;

export const LoginInfo = styled.form`
    width: 35vw;
    height: 100vh;
    padding: 32vh 5%;
    text-align: center;

    input, button {
        width: 90%;
        border: none;
        border-radius: 3px;
        padding: 13px 5px;
        outline-style: none;
        margin: 5px 0;
        font-size: 16px;
        font-weight: bold;
    }

    button {
        background-color: #1877F2;
        color: #FFF;
        margin-bottom: 20px;
    }

    button:hover {
        background-color: #567bcc;
    }

    a {
        text-decoration: underline;
        color: #FFF;
        font-size: 14px;
        display: block;
    }

    @media (max-width: 600px) {
        height: 65vw;
        padding: 10vw 5vw;
        width: 100vw;

        input, button {

        }
    }
`;