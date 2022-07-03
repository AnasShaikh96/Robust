import React from 'react'
import Slider from "react-slick";

export default function HeroSection() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed :3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };

    return (

        <>
            <div className='container'>

                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </>
    )
}
