import React from 'react'
import {BsChevronDown} from 'react-icons/bs';

import {HeaderContainer} from '../styles/timeline'

export default function Header() {
    

    return (
        <HeaderContainer>
            <h1>linkr</h1>
            <div>
                <BsChevronDown/>
                <img src="https://pm1.narvii.com/6055/c57c6dd83178676ae35485d77bd40ffb5b34ccf6_hq.jpg"/>
            </div>
        </HeaderContainer>
    )
}
