import React,{ useState, useContext } from 'react'
import axios from 'axios';

import { InputContainer } from '../styles/timeline';
import UserContext from '../contexts/UserContext';

export default function InputPost(props) {
    const { token, user } = props.userData;
    const { refresh , setRefresh } = useContext(UserContext)
    const [link,setLink] = useState('');
    const [text,setText] = useState('');
    const [clicked,setClicked] = useState(false);
    const [label,setLabel] = useState('Publicar')

    
    function publish() {

        if(clicked) return;
        
        if(text===''||link==='') {
            alert("Preencha todos os campos, por favor");
            return;
        }

        setClicked(true);
        setLabel('Publicando...');

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts",{ link , text },{headers: {"User-Token": token}});

        request.then(() => {
            setClicked(false);
            setLabel('Publicar');
            setLink('');
            setText('');
            setRefresh(!refresh);
        })

        request.catch(( )=> {
            alert("Houve um erro ao publicar o seu link");
            setClicked(false);
            setLabel('Publicar');
        })
    }

    return (
        <>
            <InputContainer>
                <img src={user.avatar}/>
                <div>
                    <h1>O que você tem para favoritar hoje?</h1>
                    <input 
                    placeholder="http://..."
                    onChange={e => setLink(e.target.value)}
                    value={link}
                    />
                    <textarea 
                    rows="5" 
                    placeholder="Comente sobre o link !"
                    onChange={e => setText(e.target.value)}
                    value={text}
                    />
                    <div><button onClick={publish}>{label}</button></div>
                </div>
            </InputContainer>
        </>
    )
}
