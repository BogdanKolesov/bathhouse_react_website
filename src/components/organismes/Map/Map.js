import React, { useState, useEffect } from 'react';
import { TileLayer, Marker, Popup } from 'react-leaflet'
import { AppContainer, Button } from '../../atoms';
import { MapContacts, MapContactsAdress, MapContactsPhone, MapContactsSocial, MapContactsTime, StyledMapContainer } from './Map.styles';

const Map = () => {
    const position = [59.921719, 30.348540]
    return (
        <AppContainer width='100%'>
            <StyledMapContainer center={position} zoom={20} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        Баня "Берёзка"
                    </Popup>
                </Marker>
                <MapContacts>
                    <MapContactsAdress>
                        <div>
                            <img src='/assets/icons/mapPoint.svg' alt='' />
                            <p>Наш адрес: город Архангельск,
                                СНТ Транспортник, стр.11</p>
                        </div>
                    </MapContactsAdress>
                    <MapContactsPhone>
                        <div>
                            <img src='/assets/icons/phone.svg' alt='' />
                            <p>Телефон: +7 (911) 554-33-44</p>
                        </div>
                    </MapContactsPhone>
                    <MapContactsTime>
                        <div>
                            <img src='/assets/icons/clock.svg' alt='' />
                            <p>График работы: круглосуточно</p>
                        </div>
                    </MapContactsTime>
                    <MapContactsSocial>

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
