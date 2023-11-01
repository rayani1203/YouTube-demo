import React from 'react';
import ReactDOM from 'react-dom';

export default function Card (props) {
    return (
        <div className='card'>
            <div className='cardImg'>
                <img className='cardImgSrc' src = {require(`./Images/${props.img}`)}></img>
            </div>
            <div className='cardDescription'>
                <img src = {require('./Images/star.webp')}/>
                <span>{props.stars}</span>
                <span> ({props.reviews}) • </span>
                <span> {props.country} </span>
            </div>
            <p>{props.title}</p>
            <p>From ${props.price}/person</p>
        </div>
    )
}