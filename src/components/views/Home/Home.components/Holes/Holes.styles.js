import styled from 'styled-components';
import Slider from "react-slick";
import { COLOR_DARK, COLOR_GREEN, COLOR_ORANGE, COLOR_WHITE } from '../../../../../constants/colors';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    .slick-list {
        overflow: visible;
    }
    li.slick-active button::before{
        color: ${COLOR_GREEN};
    }
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
    border-radius: 5px;
`

export const HoleItemContent = styled.div`
    display: flex;
    flex-direction: column;

    h4{
        font-size: 20px;
        color: ${COLOR_DARK};
        margin: 20px;
    }
`
export const HoleItemText = styled.p`
    color: ${COLOR_DARK};
    span{
        color: ${COLOR_GREEN};
    }
`
