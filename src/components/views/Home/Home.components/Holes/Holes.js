import React from 'react';
import { holesData } from '../../../../../data/holesData';
import { AppContainer, Button } from '../../../../atoms';
import { HoleImage, HoleItem, HoleItemContent, HoleItemText, HoleOffer, HolesContainer, HolesSlider, HolesTitles, NextArrow, PrevArrow } from './Holes.styles';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Holes = () => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <AppContainer>
            <HolesContainer>
                <HolesTitles>
                    <h2>
                        Наши залы
                    </h2>
                    <a href='/'>
                        Смотреть все залы
                    </a>
                </HolesTitles>
                <HolesSlider {...settings}>
                    {
                        holesData.map((hole, index) => (
                            <HoleItem key={index}>
                                <HoleImage>
                                    <img src={hole.image} alt={hole.alt} />
                                    {
                                        hole.offer ?
                                            (
                                                <HoleOffer>
                                                    {hole.offer.title}
                                                </HoleOffer>
                                            )
                                            :
                                            (<></>)
                                    }
                                </HoleImage>
                                <HoleItemContent>
                                    <h4>
                                        {hole.title}
                                    </h4>
                                    <HoleItemText>
                                        <span>
                                            Цена:
                                        </span>
                                        {hole.price}
                                    </HoleItemText>
                                    <HoleItemText>
                                        <span>
                                            Тип бани:
                                        </span>
                                        {hole.type}
                                    </HoleItemText>
                                    <HoleItemText>
                                        <span>
                                            Вместимость:
                                        </span>
                                        {hole.persones} человека
                                    </HoleItemText>
                                    <Button>
                                        Подробнее
                                    </Button>
                                </HoleItemContent>
                            </HoleItem>
                        ))
                    }
                </HolesSlider>
            </HolesContainer>
        </AppContainer>
    );
}

export default Holes;
