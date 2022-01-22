import styled from 'styled-components';
import Slider from "react-slick";
import { COLOR_DARK, COLOR_ORANGE, COLOR_WHITE } from '../../../../../constants/colors';


export const HolesContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const HolesTitles = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    h2, a {
        color: ${COLOR_DARK};
    }
`
export const HolesSlider = styled(Slider)`
    display: flex;
    width: 100%;
    overflow-x: hidden;
`

export const HoleItem = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
`
export const HoleImage = styled.div`
    width: 100%;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const HoleOffer = styled.a`
    position: absolute;
    top: 20px;
    left: 20px;
    padding-left: 20px;
    padding-right: 20px;
    height: 35px;
    background-color: ${COLOR_ORANGE};
    color: ${COLOR_WHITE};
`

export const HoleItemContent = styled.div`

`
export const HoleItemText = styled.p`

`
