import React,{ useState, useContext } from 'react'
import axios from 'axios';
import { IoIosPin } from 'react-icons/io';

import { InputContainer } from '../styles/styledTimeline';
import UserContext from '../contexts/UserContext';
import RefreshContext from '../contexts/RefreshContext';
import { getLocation } from '../functions/getLocation';

export default function InputPost(props) {
    const { token, user } = props.userData;
    const { setMyPost } = useContext(UserContext);
    const { refresh, setRefresh } = useContext(RefreshContext);
    const [link,setLink] = useState('');
    const [text,setText] = useState('');
    const [clicked,setClicked] = useState(false);
    const [label,setLabel] = useState('Publicar')
    const [activated, setActivated] = useState(false);
    const [location, setLocation] = useState({});
    
    function publish() {

        if(clicked) return;
        
        if(link==='') {
            alert("Preencha o link, por favor");
            return;
        }

        setClicked(true);
        setLabel('Publicando...');

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts",{ link , text, 'geolocation': location }, {headers: {"User-Token": token}});

        request.then(() => {
            setClicked(false);
            setLabel('Publicar');
            setLink('');
            setText('');
            setMyPost(true);
            setRefresh(!refresh);
        });

        request.catch(() => {
            alert("Houve um erro ao publicar o seu link");
            setClicked(false);
            setLabel('Publicar');
        });
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
                    <div>
                        {activated
                            ? <span onClick={() => getLocation(activated, setActivated, setLocation)}>
                                <IoIosPin className='activated' /> 
                                <p className='activated'>Localização ativada</p>
                            </span>
                            : <span onClick={() => getLocation(activated, setActivated, setLocation)}>
                                <IoIosPin /> 
                                <p>Localização desativada</p>
                            </span>
                        }
                        <button onClick={publish}>{label}</button>
                    </div>
                </div>
            </InputContainer>
        </>
    )
}