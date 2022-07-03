import React from 'react'
import Navbar from '../layouts/Navbar';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import WeDo from './WeDo';

export default function Home() {

    return (
        <>
            <Navbar />
            <HeroSection />
            <WeDo />
            <About />


            <Contact />
        </>
    )
}
