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
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
