import React from 'react';

import { Container, LoginTitle, LoginInfo } from '../styles/login';

export default function Login() {

    return (
        <Container>
            <LoginTitle>
                <h1>Linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </LoginTitle>
            <LoginInfo>
                <input type='text' placeholder='e-mail'/>
                <input type='text' placeholder='password'/>
                <button>Log In</button>
                <a>First time? Create an account!</a>
            </LoginInfo>
        </Container>
    );
}