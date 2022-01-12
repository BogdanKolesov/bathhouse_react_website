import React from 'react';
import { ICON_MAPPOINT } from '../../../constants/icons';
import { AppContainer } from '../../atoms';
import { HeroBackground, HeroContainer, HeroText } from './Hero.styles';
import Header from "../Header";


const Hero = () => {
    return (
        <HeroContainer>
            <Header />
            <HeroBackground src='/assets/images/Hero/heroBackground.png' alt='' />
            <AppContainer>

                <HeroText>
                    <h1>
                        Баня "Берёзка" в Санкт-Петербурге
                    </h1>
                    <span>
                        <img src={ICON_MAPPOINT} alt='' />
                        г.Санкт-Петербург, ул.Боровая, д.8
                    </span>
                    <p>Работаем <bold>круглосуточно</bold></p>
                    <p>Цены <bold>от 1100 рублей</bold></p>

                </HeroText >
            </AppContainer >
        </HeroContainer >
    );
}

export default Hero;    
