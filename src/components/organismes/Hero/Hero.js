import React from 'react';
import { ICON_MAPPOINT } from '../../../constants/icons';
import { TextContainer, HeroBackground, HeroContainer, HeroSubtitle, HeroText } from './Hero.styles';
import Header from "../Header";


const Hero = () => {
    return (
        <HeroContainer>
            <Header />
            <HeroBackground src='/assets/images/Hero/heroBackground.png' alt='' />
            <TextContainer>
                <HeroText>
                    <h1>
                        <span>Баня "Берёзка"</span><span> в Санкт-Петербурге</span>
                    </h1>
                    <HeroSubtitle>
                        <img src={ICON_MAPPOINT} alt='' />
                        г. Санкт-Петербург, ул.Боровая, д.8
                    </HeroSubtitle>
                    <p>Работаем <bold>круглосуточно</bold></p>
                    <p>Цены <bold>от 1100 рублей</bold></p>
                </HeroText >
            </TextContainer >
        </HeroContainer >
    );
}

export default Hero;    
