import styled from 'styled-components';
import { COLOR_DARK, COLOR_GRAY, COLOR_GREEN, COLOR_LITEGRAY, COLOR_ORANGE, COLOR_WHITE } from '../../../../../constants/colors';
import Slider from "react-slick";
import { Button } from '../../../../atoms';

export const HolesContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HolesTitles = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    h2, a {
        color: ${COLOR_DARK};
    }
    h2{
        font-size: 60px;
    }
    a{
        font-size: 18px;
        text-decoration: underline;
    }
`
export const HolesSlider = styled(Slider)`
    display: flex;
    width: 80%;
    justify-content: space-between;
`

export const HoleItem = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    /* margin: 20px; */
    border: 1px solid ${COLOR_GRAY};
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
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
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: 20px;
    h4{
        font-size: 20px;
        color: ${COLOR_DARK};
        margin-bottom: 20px;
    }

    ${Button}{
        margin-top: 10px;
    }
`
export const HoleItemText = styled.p`
    color: ${COLOR_DARK};
    margin-bottom: 15px;
    span{
        color: ${COLOR_GREEN};
        margin-right: 2px;
    }
`
export const NextArrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${COLOR_GREEN};
    border-radius: 50%;
    z-index: 2;
    &:hover{
        opacity: 0.5;
    }
    &:before{
        content: url('/assets/icons/longArrow.svg');
        margin-left: -15px;
    }
`

export const PrevArrow = styled(NextArrow)`
    rotate: 180deg;
`