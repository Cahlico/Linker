import styled from 'styled-components';

export const MainContainer = styled.main `
    padding-top: 100px;
    padding-left: 17vw;
    display: flex;
    font-family: 'Lato',sans-serif;
    flex-direction: column;
    align-items: flex-start;

    & > span {
        color: #FFF;
        font-weight: bold;
        font-size: 43px;
        font-family: 'Oswald' , sans-serif;
        margin-bottom: 25px;
        padding: 30px 0 20px 0;
        width: 86%;
        display: flex;
        justify-content: space-between;

        button {
            border: none;
            color: #FFF;
            border-radius: 3px;
            height: 30px;
            width: 100px;
            outline-style: none;
            font-size: 14px;
            background-color: #1877F2;
            margin-top: 20px;

            &.unfollow {
                background-color: #FFF;
                color: #1877F2;
            }
        }

        button:hover {
            background-color: #5db0cf;

            &.unfollow {
                background-color: #d4d6d9;
            }
        }
    }

    @media(max-width: 600px) {
        padding-top: 100px;
        padding-left: 0;

        & > span {
            width: 100vw;
            margin: 10px 5px;
            font-size: 30px;
            
            button {
                margin-right: 5px;
                margin-top: 5px;
            }
        }
    }
`;

export const InputContainer = styled.article `
    background: #FFF;
    display:flex;
    padding: 10px 20px;
    border-radius: 13px; 
    width: 46vw;
    margin-bottom:20px;

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
        width:100%;
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

    & > div {
        width:100%;
    }

    div div {
        display:flex;
        justify-content: space-between;
    }

    div div span {
        display: flex;

        svg, p {
            margin-top: 8px;
            color: #eb4034;
            cursor: pointer;
        }

        .activated {
            color: #25cc35;
        }

        svg:hover, p:hover {
            color: #db3b56;

            &.activated {
                color: #6fe886;
            }
        }
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

    button:hover {
        background-color: #567bcc;
    }

    @media(max-width: 600px) {
        width: 100vw;
        border-radius: 2px;
        margin-bottom: 0px;
    }
`;

export const TrendContainer = styled.aside ` 
    background: #171717;
    position: fixed;
    right: 170px;
    top: 217px;
    border-radius: 20px;
    color: white;
    font-weight: 700;
    width: 20%;
    padding: 15px 20px;
    display:flex;
    flex-direction:column;
    align-items:center;

    h1 {
        font-size:27px;  
        margin-bottom:12px;
        width:100%;     
    }

    div {
        width:calc(100% + 40px);
        height:1px;
        background:#484848;
    }

    ul {
        margin-top: 15px;
        width:100%;
    }

    li {
        margin-bottom:10px;
        font-size:19px;
        font-family: 'Lato' , sans-serif;
    }

    li::before {
        content: "#";
    }

    a {
        color:inherit;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;