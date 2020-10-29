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

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending",{headers: {"User-Token": token}});
        request.then(response => setTopics(response.data.hashtags));
        
        request.catch(() => window.location = "http://localhost:9000");
    },[])

    return (
        <TrendContainer>
            <h1>trending</h1>
            <HashtagSearch>
                <span>#</span>
                <input 
                type="search"
                placeholder="Assunto"
                />
            </HashtagSearch>
            <div/>
            <ul>
                 {topics.map(topic => 
                    <li key={topic.id} onClick={()=>{setRefresh(!refresh)}}>
                        <Link to={{ pathname:`/HashtagPage:${topic.name}`, state: topic.name }}>{topic.name}</Link>
                    </li>  
                  )}  
            </ul>    
        </TrendContainer>
    )
}

const HashtagSearch = styled.form `
    width: 100%;
    margin-bottom: 8px;

    span {
        font-size: 19px;
        font-family: inherit;
        font-weight: 700;
    }
    
    input {
        font-family: inherit;
        width: 85%;
        font-size: 19px;
        outline: none;
        border: none;
        border-radius: 4px;
        margin-left: 2px;
        color: white;
        background-color: #333;
        font-weight: 700;
    }
    
`
