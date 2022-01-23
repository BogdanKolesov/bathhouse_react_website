import React from 'react';
import { actionsData } from '../../../data/actionsdata';
import { previousData } from '../../../data/previousData';
import Actions from '../../organismes/Actions/Actions';
import Hero from '../../organismes/Hero'
import Previous from '../../organismes/Previous/Previous';
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
        </>
    );
}

export default Home;
