import styled from 'styled-components';

export const modalStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#333333',
        borderRadius: '50px'
    }
};

export const DeleteScreen = styled.div`
    width: 35vw;
    height: 220px;
    background-color: #333333;
    color: #FFF;
    text-align: center;

    h4 {
        font-size: 40px;
        font-weight: bold;
        padding: 30px 20px;
    }

    button {
        border: none;
        border-radius: 3px;
        padding: 10px 5px;
        outline-style: none;
        font-size: 16px;
        font-weight: bold;
        width: 20%;
        margin-right: 20px;
        margin-top: 10px;
    }
`;

export const Load = styled.img`
    width: 20%;
    margin: -20px 40%;

    @media (max-width: 600px) {
        width: 60vw;
    }
`;