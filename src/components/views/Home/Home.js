import React from 'react';
import Hero from '../../organismes/Hero'
import About from './Home.components/About';
import CheckForm from './Home.components/CheckForm'

const Home = () => {
    return (
        <>
            <Hero />
            <CheckForm />
            <About />
        </>
    );
}

export default Home;
