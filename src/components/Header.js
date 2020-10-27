import React from 'react'
import {BsChevronDown} from 'react-icons/bs';

import {HeaderContainer} from '../styles/timeline'

export default function Header(props) {
    const {avatar} = props;
    
    return (
        <HeaderContainer>
            <h1>linkr</h1>
            <div>
                <BsChevronDown/>
                <img src={avatar}/>
            </div>
        </HeaderContainer>
    )
}
