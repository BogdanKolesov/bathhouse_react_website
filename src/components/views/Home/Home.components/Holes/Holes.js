import React from 'react';
import { holesData } from '../../../../../data/holesData';
import { AppContainer, Button } from '../../../../atoms';
import { Swiper, SwiperSlide } from "swiper/react";

import { HoleImage, HoleItem, HoleItemContent, HoleItemText, HoleOffer, HolesContainer, HolesSlider, HolesTitles } from './Holes.styles';
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

const Holes = () => {


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
                <HolesSlider className='mySwiper' navigation={true} slidesPerView={3} spaceBetween={30}>
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
