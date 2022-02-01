import styled from 'styled-components';
import { AppContainer, Button, SocialIcon } from '../../atoms';

export const HeroContainer = styled.section`
    width: 100%;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroSubtitle = styled.span`
    font-size: 20px;
    margin-bottom: 29px;
    img{
        margin-right: 17.5px;
    }
`
export const HeroTime = styled.p`
    margin-top: 29px;
`

export const HeroPrice = styled.p`
    margin-top: 15px;
`
export const HeroContent = styled(AppContainer)`
    display: flex;
    justify-content: space-between;
`

export const HeroBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    min-height: 690px;
    z-index: -1;
`
export const HeroText = styled.div`    
    h1{
        font-size: 70px;
        display: flex;
        flex-direction: column;
        @media(max-width: 1200px){
            font-size: 28px;
        }
    }
    p{
        font-size: 22px;
    }
    ${Button}{
        margin-top: 30px;
    }
`
export const TextContainer = styled.div`
    width: 100%;
    margin-top: 110px;
    display: flex;
    justify-content: space-between;
`

export const HeroSocial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    ${SocialIcon}{
        margin-bottom: 30px;
    }
`