import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import { TrendContainer } from '../styles/timeline';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';


export default function TrendingTopics(props) {
    const { token } = props.userData;

    const { refresh , setRefresh } = useContext(UserContext);

    const [topics, setTopics] = useState([]);
    const [search, setSearch] = useState('');
    const history = useHistory();

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending",{headers: {"User-Token": token}});
        request.then(response => setTopics(response.data.hashtags));
        
        request.catch(() => window.location = "http://localhost:9000");
    },[])

    function searchHashtag(event) {
        event.preventDefault();

        if(search==='') {
            alert("Preencha o campo com um assunto");
        }
        else {
            history.push({ pathname:`/HashtagPage:${search}`, state: search });
            setRefresh(!refresh);
        }
    }

    return (
        <TrendContainer>
            <h1>trending</h1>
            <HashtagSearch onSubmit={searchHashtag}>
                <span>#</span>
                <input 
                type="search"
                placeholder="Assunto"
                onChange={e => setSearch(e.target.value)}
                value={search}
                />
            </HashtagSearch>
            <div/>
            <ul>
                 {topics.map(topic => 
                    <li key={topic.id} onClick={()=>{setRefresh(!refresh)}}>
                        <Link to={{ pathname:`/HashtagPage:${topic.name}`, state: topic.name }} 
                        >{topic.name}</Link>
                    </li>  
                  )}  
            </ul>    
        </TrendContainer>
    )
}

const HashtagSearch = styled.form `
    width: 100%;
    margin-bottom: 8px;

    span, input {
        margin: 10px 3px;
        font-size: 18px;
        font-weight: 700;
    }
    
    input {
        width: 87%;
        outline: none;
        border: none;
        border-radius: 4px;
        background: #FFF;
        color: #171717;
        padding: 5px 5px;
    }
    
`
