import styled from 'styled-components';
import { COLOR_WHITE } from '../../../constants/colors';
import { AppContainer } from '../../atoms';

export const HeroContainer = styled.section`
    width: 100%;
    position: relative;
    height: 100vh;
`

export const HeroSubtitle = styled.span`
    color: ${COLOR_WHITE};
    font-size: 20px;
    margin-bottom: 29px;
    img{
        margin-right: 17.5px;
    }
`

export const HeroBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
`
export const HeroText = styled.div`    
    h1{
        color: ${COLOR_WHITE};
        font-size: 70px;
        display: flex;
        flex-direction: column;
    }
    p{
        font-size: 22px;
        color: ${COLOR_WHITE};
        &:nth-child(1){
            margin-top: 29px;
        }
    }
`
export const TextContainer = styled(AppContainer)`
    margin-top: 86px;
`