import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import { TrendContainer } from '../styles/timeline';


export default function Trendingtopics(props) {
    const { token } = props.userData;

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending",{headers: {"User-Token": token}});
        request.then(response => setTopics(response.data.hashtags));
        
        request.catch(response => console.log(response));
    },[])

    return (
        <TrendContainer>
            <h1>trending</h1>
            <div/>
            <ul>
                 {topics.map(topic => 
                    <li key={topic.id}>
                        <Link to={`/Hashtag:${topic.name}`}>{topic.name}</Link>
                    </li>  
                  )}  
            </ul>    
        </TrendContainer>
    )
}
