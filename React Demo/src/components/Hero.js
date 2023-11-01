import React from 'react';
import ReactDOM from 'react-dom';

export default function Hero() {
    return (
        <section>        
            <img src = {require('./Images/photo-collage-sample.jpeg')} />
            <h1 style={{textAlign: "center", width: "100%", margin:"auto"}}>Cover Photo</h1>
            <p style={{textAlign: "center", margin:"auto"}}>Here we can describe the featured video/ad</p>
        </section>
    )
}