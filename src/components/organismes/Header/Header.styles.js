import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_ORANGE, COLOR_WHITE } from '../../../constants/colors';
import { Button } from '../../atoms';



export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 28px;
    height: 86px;
`
export const HeaderLogo = styled.div`
    display: flex;
    align-items: flex-end;
    img{
        height: 100%;
    }
    p{
        display: flex;
        flex-direction: column;
        margin-left: 17px;
        height: 100%;
        span{
            font-size: 25px;
            font-weight: 400;
        }
        span:last-child{
            font-size: 18px;
        }
    }

`
export const HeaderLinks = styled.div`
    display: flex;
`
export const HeaderLink = styled.a`
    margin-right: 64px;
    position: relative;
        &:after{ 
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: transparent;
        border-radius: 5px;
        left: 0;
        bottom: -3px;
        transition: 0.15s linear;

    }
    &:hover{
        &:after{
            background-color: ${COLOR_WHITE};
        }
    }
        &:nth-last-child(1) {
            margin-right: 0;
        }
    
`

export const HeaderInfo = styled.div`

`

export const HeaderPhone = styled.div`

`
export const HeaderButton = styled(Button)`
    background-color: ${COLOR_ORANGE};
    border-color: ${COLOR_ORANGE};
`
export const HeaderHamburger = styled.div`
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderHamburgerLines = styled.div`
    height: 2px;
    width: 20px;
    position: relative;
    background-color: ${COLOR_WHITE};
    border-radius: 3px;
    transition: 0.15s linear;   
    &:before{
        content: '';
        height: 2px;
        width: ${({ activeMobile }) => activeMobile ? '25px' : '15px'};
        position: absolute;
        top: -6px;
        right: 0;
        background-color: ${COLOR_WHITE};
        border-radius: 3px;
        transition: 0.15s linear;
    }
    &:after{
        content: '';
        height: 2px;
        width: ${({ activeMobile }) => activeMobile ? '15px' : '25px'};
        position: absolute;
        bottom: -6px;
        right: 0;
        background-color: ${COLOR_WHITE};
        border-radius: 3px;
        transition: 0.15s linear;
    }
`