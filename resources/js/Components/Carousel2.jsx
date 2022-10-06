import React from 'react';
import { Carousel } from 'react-responsive-carousel';
export default function Carousel2({ name, value, handleChange }) {
    return (

        <Carousel autoPlay={true} dynamicHeight={true}>
        <div>
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>


    );
}

