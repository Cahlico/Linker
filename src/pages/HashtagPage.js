import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';

import { MainContainer } from '../styles/timeline'

export default function HashtagPage() {
    const data = useContext(UserContext);
    const { userInfo } = data;

    return (
        <>
            <Header/>
            <MainContainer>
                <h1># name</h1>
            </MainContainer>
        </>
    )
}