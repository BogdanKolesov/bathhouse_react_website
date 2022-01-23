import styled from 'styled-components';
import { MapContainer } from 'react-leaflet'
import { COLOR_DARK, COLOR_WHITE } from '../../../constants/colors';

export const StyledMapContainer = styled(MapContainer)`
    margin-top: 80px;
    height: 500px;
    position: relative;
`
export const MapContacts = styled.div`
    background-color: ${COLOR_WHITE};
    border-radius: 5px;
    position: absolute;
    top: 50px;
    /* bottom: 0; */
    left: 320px;
    z-index: 999;
    height: 400px;
    padding: 33px 0 44px 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const MapContactsAdress = styled.p`
    width: 60%;
    div{
        display: flex;
        img{
            margin-right: 15px;
        }
        p{
            color: ${COLOR_DARK};
            font-size: 20px;
        }

    }
`

export const MapContactsPhone = styled(MapContactsAdress)`

`
export const MapContactsTime = styled(MapContactsAdress)`

`

export const MapContactsSocial = styled.div`

`