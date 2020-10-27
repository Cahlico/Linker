import React,{useState} from 'react'

import {InputContainer} from '../styles/timeline';

export default function InputPost(props) {
    const {avatar} = props;
    const [link,setLink] = useState('');
    const [description,setDescription] = useState('');


    
    function publish() {
        console.log(description,link);
        if(description===''||link==='') {
            alert("Preencha todos os campos, por favor");
        }
    }

    return (
        <>
            <InputContainer>
                <img src={avatar}/>
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
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    />
                    <div><button onClick={publish}>Publicar</button></div>
                </div>
            </InputContainer>
        </>
    )
}
