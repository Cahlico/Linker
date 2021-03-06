import React, { useState  } from 'react';
import { IoIosPin, IoIosClose } from 'react-icons/io';
import Modal from 'react-modal';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { modalStyles, containerStyle, MapHeader } from '../styles/styledModal';
import { openModal, closeModal } from '../functions/modal';
import { apiKey } from '../api/api';

export default function LocationMap(props) {

    const { username } = props;
    let latitude, longitude;
    const [modalIsOpen, setIsOpen] = useState(false);
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
                    <MapHeader>
                        <h4>{username}'s location</h4>
                        <IoIosClose onClick={() => setIsOpen(false)} />
                    </MapHeader>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={myCoodinates}
                        zoom={14}
                    >
                        <Marker draggable={true} position={myCoodinates} />
                    </GoogleMap>
                </LoadScript>
            </Modal>
        </>
    );
}

Modal.setAppElement(document.getElementById('root'));