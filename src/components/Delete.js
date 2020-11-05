import React, { useState, useContext } from 'react';
import { IoMdTrash } from 'react-icons/io';
import Modal from 'react-modal';
import axios from 'axios';

import { modalStyles, DeleteScreen, Load } from '../styles/styledModal';
import UserContext from '../contexts/UserContext';
import RefreshContext from '../contexts/RefreshContext';
import { openModal, closeModal } from '../functions/modal';

export default function Delete(props) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const { postId } = props
    const [loading, setLoading] = useState(false);
    const { userInfo } = useContext(UserContext);
    const { refresh, setRefresh } = useContext(RefreshContext);
    const userData = userInfo.data;

    function deletePost() {
        setLoading(true);
        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${postId}`, {headers: {"User-Token": userData.token }});

        request.then(() => {
            setIsOpen(false);
            setLoading(false);
            setRefresh(!refresh);
        });

        request.catch(() => {
            setIsOpen(false);
            alert('Houve um erro ao excluir o post');
            setLoading(false);
        });
    }
    
    return (
        <>
            <IoMdTrash onClick={() => openModal(setIsOpen)} className='redColored' />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => closeModal(setIsOpen)}
                style={modalStyles}
                contentLabel="deletion confirmation"
            >
                <DeleteScreen>
                    <h4>Tem certeza que deseja excluir essa publicação?</h4>
                    {loading
                        ? <Load src='https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif' />
                        : <>
                            <button onClick={() => closeModal(setIsOpen)}>Cancelar</button>
                            <button onClick={() => deletePost()} className='delete'>Excluir</button>
                        </>
                    }
                </DeleteScreen>
            </Modal>
        </>
    );
}

Modal.setAppElement(document.getElementById('root'));