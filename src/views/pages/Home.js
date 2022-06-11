import React from 'react'
import Navbar from '../layouts/Navbar';
import Contact from './Contact';

export default function Home() {

    return (
        <>
            <Navbar />
            <div className='hero-wrapper'>
                <div className="container">
                    <div className='hero-title'>
                    </div>
                </div>
            </div>

            <Contact />
        </>
    )
}
