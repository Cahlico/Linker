import React, { useState, useContext } from 'react'
import {BsChevronDown,BsChevronUp} from 'react-icons/bs';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import UserContext from '../contexts/UserContext'
import {HeaderContainer} from '../styles/timeline'

export default function Header(props) {
    const { avatar, id, username } = props;
    const [isDroped,setIsDroped] = useState(false);
    const { setUserInfo } = useContext(UserContext);
    const history = useHistory();

    function dropDownMenu () {
        setIsDroped(!isDroped);
    }

    function logout() {
        setUserInfo({})
        history.push('/');
    }

    return (
        <>
            <HeaderContainer>
                <h1><Link to ="/timeline">linkr</Link></h1>
                <div onClick={dropDownMenu}>
                    {isDroped
                        ? <BsChevronUp/>
                        : <BsChevronDown/>
                    }                    
                    <img src={avatar}/>
                </div>
            </HeaderContainer>
            <Menu isDroped = {isDroped}>
                <Link to={{ pathname:`/UserPosts:my-posts`, state: { id, username }}} >My posts</Link>
                <Link to={{ pathname:`/my-likes`, state: { id }}}>My likes</Link>
                <button onClick={logout}>Logout</button>
            </Menu>
        </>
    )
}

const Menu = styled.div `
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
`
