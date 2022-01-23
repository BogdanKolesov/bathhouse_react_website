import React from 'react';
import { previousData } from '../../../data/previousData';
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
        </>
    );
}

export default Home;
