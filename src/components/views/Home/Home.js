import React from 'react';
import { actionsData } from '../../../data/actionsdata';
import { previousData } from '../../../data/previousData';
import { ReviewsData } from '../../../data/reviewsData';
import Actions from '../../organismes/Actions/Actions';
import ConsultForm from '../../organismes/ConsultForm';
import Hero from '../../organismes/Hero'
import Map from '../../organismes/Map';
import Previous from '../../organismes/Previous/Previous';
import Reviews from '../../organismes/Reviews';
import About from './Home.components/About';
import CheckForm from './Home.components/CheckForm'
import Holes from './Home.components/Holes';

const Home = () => {
    return (
        <>
            <Hero />
            <CheckForm />
            <About />
            <Holes />
            <Previous content={previousData} />
            <Actions content={actionsData} />
            <ConsultForm />
            <Reviews content={ReviewsData} />
            <Map />
        </>
    );
}

export default Home;
