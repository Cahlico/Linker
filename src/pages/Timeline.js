import React from 'react'

import Header from '../components/Header';
import InputPost from '../components/InputPost';

import {MainContainer} from '../styles/timeline'

export default function Timeline() {
    

    return (
        <>
            <Header/>
            <MainContainer>
                <h1>timeline</h1>
                <InputPost/>
            </MainContainer>
        </>
    )
}
