import React, { useState, useCallback  } from 'react';
import { IoIosPin } from 'react-icons/io';
import Modal from 'react-modal';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { modalStyles, containerStyle } from '../styles/styledModal';
import { openModal, closeModal } from '../functions/modal';

export default function LocationMap(props) {

    const { username } = props;
    let latitude, longitude;
    const [modalIsOpen, setIsOpen] = useState(false);
    const apiKey = 'AIzaSyDOztJhF_njfFybGT7LPA_eQszwINkqofI';

    if(props.geolocation !== undefined) {
        latitude = props.geolocation.latitude;
        longitude = props.geolocation.longitude
    } else return null;

    const myCoodinates = { lat: parseFloat(latitude), lng: parseFloat(longitude)};

    return (
        <>

            <IoIosPin className='locationPin' onClick={() => openModal(setIsOpen)}/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => closeModal(setIsOpen)}
                style={modalStyles}
                contentLabel="deletion confirmation"
            >
                <LoadScript
                    googleMapsApiKey={apiKey}
                >
                    <h4>{username}'s location</h4>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={myCoodinates}
                        zoom={14}
                        
                    >
                    </GoogleMap>
                </LoadScript>
            </Modal>
        </>
    );
}

Modal.setAppElement(document.getElementById('root'));