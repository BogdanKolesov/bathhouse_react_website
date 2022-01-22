import React from 'react';
import Hero from '../../organismes/Hero'
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
        </>
    );
}

export default Home;
