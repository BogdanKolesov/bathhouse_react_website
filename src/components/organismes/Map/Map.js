import React, { useState, useEffect } from 'react';
import { TileLayer, Marker, Popup } from 'react-leaflet'
import { socialIcons } from '../../../data/socialIcons';
import { AppContainer, Button, SocialIcon } from '../../atoms';
import { MapContacts, MapContactsAdress, MapContactsPhone, MapContactsSocial, MapContactsTime, StyledMapContainer } from './Map.styles';

const Map = () => {

    const centerPosition = [59.921869, 30.346439]
    const markerPosition = [59.921719, 30.348540]

    return (
        <AppContainer width='100%'>
            <StyledMapContainer center={centerPosition} zoom={20} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={markerPosition}>
                    <Popup>
                        Баня "Берёзка"
                    </Popup>
                </Marker>
                <MapContacts>
                    <MapContactsAdress>
                        <div>
                            <img src='/assets/icons/mapPoint.svg' alt='' />
                            <p><span>Наш адрес:</span> г.Санкт-Петербург, ул.Боровая, д.8</p>
                        </div>
                    </MapContactsAdress>
                    <MapContactsPhone>
                        <div>
                            <img src='/assets/icons/phone.svg' alt='' />
                            <p><span>Телефон:</span> +7 (999) 333-22-11</p>
                        </div>
                    </MapContactsPhone>
                    <MapContactsTime>
                        <div>
                            <img src='/assets/icons/clock.svg' alt='' />
                            <p><span>График работы:</span> круглосуточно</p>
                        </div>
                    </MapContactsTime>
                    <MapContactsSocial>
                        {
                            socialIcons.map((icon, index) => (
                                <SocialIcon key={index} href={icon.link}>
                                    <img src={icon.social} alt={icon.alt} />
                                </SocialIcon>
                            ))
                        }
                    </MapContactsSocial>
                    <Button>
                        Зказать обратный звонок
                    </Button>
                </MapContacts>
            </StyledMapContainer>
        </AppContainer>
    );
}

export default Map;
