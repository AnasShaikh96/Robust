import React from 'react'
import Navbar from '../layouts/Navbar';
import About from './About';
import WeDo from './WeDo';

export default function Home() {

    return (
        <>
            <Navbar />
            <div className='hero-wrapper'>
                <div className="container">
                    <div className='hero-title'>
                        something
                    </div>
                </div>
            </div>
            <WeDo />
            <About />


            {/* <Contact /> */}
        </>
    )
}
