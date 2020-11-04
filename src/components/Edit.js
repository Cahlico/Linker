import React, { useState, useContext } from 'react';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import RefreshContext from '../contexts/RefreshContext';

export default function Edit (props) {
    
    const { postText, setEdit, postId, setPostText } = props;
    const { userInfo } = useContext(UserContext);
    const { refresh, setRefresh } = useContext(RefreshContext);
    const userData = userInfo.data;
    const [ inputText, setInputText ] = useState(postText);
    const [ disable, setDisable ] = useState(false)

    function keyPressed(event) {
        if(disable) return;

        if(event.keyCode===27) setEdit(false);

        if(event.keyCode===13) {
            event.preventDefault();

            const request = axios.put(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${postId}`,{text:inputText.trim()},{headers: {"User-Token": userData.token}});

            setDisable(true);

            request.then(() => {
                setDisable(false);
                setEdit(false);
                setPostText(inputText.trim());
                setRefresh(!refresh);
            });
            request.catch(() => {
                setDisable(false);
                alert("Não foi possível salvar as alterações");
            })
        }
    }

    return (
        <textarea 
        value={inputText}
        onChange={e=>setInputText(e.target.value)} 
        autoFocus={true}
        onFocus={e=>setInputText(e.target.defaultValue + " ")}
        onKeyDown={e=>keyPressed(e)}
        disabled={disable}               
        />
    )  
}
