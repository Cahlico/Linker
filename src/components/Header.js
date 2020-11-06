import React, { useState, useEffect, useContext } from 'react'
import  { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { IoMdSearch } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

import { HeaderContainer, Menu, SearchContainer, UsersContainer } from '../styles/styledHeader';
import UserContext from '../contexts/UserContext';

export default function Header(props) {
    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data;
    const { avatar, id, username } = props;
    const [isDroped,setIsDroped] = useState(false);
    const history = useHistory();
    const [focus, setFocus] = useState(false);
    const [search, setSearch] = useState('');
    const [searchedUsers, setSearchedUsers] = useState([]);

    useEffect(() => {

        if(search.length < 3) {
            setSearchedUsers([]);
            return;
        }

        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/search?username=${search}`, {headers: {"User-Token": userData.token}});

        request.then(response => {
            let followed = [];
            let unfollowed = [];
            response.data.users.forEach(i => {
                if(i.id === id);
                else if(i.isFollowingLoggedUser) {
                    followed.push(i);
                } else {
                    unfollowed.push(i);
                }
            });
            setSearchedUsers([...followed, ...unfollowed]);
        });
    }, [search]);

    function resetInput() {
        setFocus(false);
        setTimeout(() => setSearchedUsers([]), 300);
    }

    function dropMenu() {
        setIsDroped(!isDroped);
        setSearchedUsers([]);
    }

    return (
        <>
            <HeaderContainer>
                <h1><Link to ="/timeline" >linkr</Link></h1>
                <SearchContainer>
                    <DebounceInput
                        placeholder= {focus ? '' : 'Search for people and friends'}
                        onFocus={() => setFocus(true)}
                        onBlur={() => resetInput()}
                        minLength={3}
                        debounceTimeout={300}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {focus
                        ? ''
                        : <IoMdSearch />
                    }
                    <UsersContainer>
                        {searchedUsers.length 
                            ? searchedUsers.map((u, i) => (
                                (u.isFollowingLoggedUser)
                                    ? <Link to={{ pathname:`/UserPosts:${u.id}`, state: { id: u.id , username: u.username }}} key={u.id} >
                                        <img src={u.avatar} />
                                        <p>{u.username} <span>• following</span></p>
                                    </Link>
                                    : <Link to={{ pathname:`/UserPosts:${u.id}`, state: { id: u.id , username: u.username }}} key={i}>
                                        <img src={u.avatar} />
                                        <p>{u.username}</p>
                                    </Link>
                            ))
                            : ''
                        }
                    </UsersContainer>
                </SearchContainer>
                <div onClick={() => dropMenu()} className='show-menu'>
                    {isDroped
                        ? <BsChevronUp/>
                        : <BsChevronDown/>
                    }                    
                    <img src={avatar}/>
                </div>
            </HeaderContainer>
            <Menu isDroped = {isDroped}>
                <Link 
                to={{ pathname:`/UserPosts:my-posts`, state: { id, username }}} >My posts</Link>
                <Link to={{ pathname:`/my-likes`, state: { id }}} >My likes</Link>
                <button 
                    onClick={() => {
                        history.push('/');
                        localStorage.clear();
                    }}
                >
                    Logout
                </button>
            </Menu>
        </>
    )
}