import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import { TrendContainer } from '../styles/timeline';
import UserContext from '../contexts/UserContext';


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
