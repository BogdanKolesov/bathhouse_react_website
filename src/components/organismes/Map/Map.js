import React, { useState, useEffect } from 'react';
import { TileLayer, Marker, Popup } from 'react-leaflet'
import { AppContainer } from '../../atoms';
import { StyledMapContainer } from './Map.styles';

const Map = () => {
    const position = [59.921719, 30.348540]
    return (
        <AppContainer width='100%'>
            <StyledMapContainer center={position} zoom={20} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </StyledMapContainer>
        </AppContainer>
    );
}

export default Map;
