import React from 'react'

import {InputContainer} from '../styles/timeline';

export default function InputPost() {
    

    return (
        <>
            <InputContainer>
                <img src="https://pm1.narvii.com/6055/c57c6dd83178676ae35485d77bd40ffb5b34ccf6_hq.jpg"/>
                <div>
                    <h1>O que você tem para favoritar hoje?</h1>
                    <input placeholder="http://..."/>
                    <textarea rows="5" placeholder="Comente sobre o link !"/>
                    <div><button>Publicar</button></div>
                </div>
            </InputContainer>
        </>
    )
}
