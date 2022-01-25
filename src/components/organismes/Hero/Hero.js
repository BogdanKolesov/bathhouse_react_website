import React from 'react';
import { ICON_MAPPOINT } from '../../../constants/icons';
import { TextContainer, HeroContent, HeroSocial, HeroBackground, HeroContainer, HeroSubtitle, HeroText, HeroTime, HeroPrice } from './Hero.styles';
import Header from "../Header";
import { Button, SocialIcon } from '../../atoms';
import { socialIcons } from '../../../data/socialIcons';


const Hero = () => {
    return (
        <HeroContainer>
            <Header />
            <HeroBackground src='/assets/images/Hero/heroBackground.png' alt='' />
            <HeroContent>
                <TextContainer>
                    <HeroText>
                        <h1>
                            <span>Баня "Берёзка"</span><span> в Санкт-Петербурге</span>
                        </h1>
                        <HeroSubtitle>
                            <img src={ICON_MAPPOINT} alt='' />
                            г.Санкт-Петербург, ул.Боровая, д.8
                        </HeroSubtitle>
                        <HeroTime>Работаем <b>круглосуточно</b></HeroTime>
                        <HeroPrice>Цены <b>от 1100 рублей</b></HeroPrice>
                        <Button>
                            Заказать обратный звонок
                        </Button>
                    </HeroText >
                    <HeroSocial>
                        {
                            socialIcons.map((icon, index) => (
                                <SocialIcon key={index} href={icon.link}>
                                    <img src={icon.social} alt={icon.alt} />
                                </SocialIcon>
                            ))
                        }
                    </HeroSocial>
                </TextContainer >
            </HeroContent>
        </HeroContainer >
    );
}

export default Hero;    
