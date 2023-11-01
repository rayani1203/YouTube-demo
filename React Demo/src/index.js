import React from 'react'
import ReactDOM from 'react-dom'

import {
    Nav, Hero, Card
} from './components'

import data from './data'
import data2 from './data2'

function Cards(){
    const allCards = data.map(item => {
        return (
            <Card 
            img = {item.img}
            rating = {item.stats.rating}
            reviews = {item.stats.reviews}
            country = {item.country}
            title = {item.title}
            price = {item.price}
            openSpots = {item.openSpots}
            />
        )
    })
    const allCards2 = data2.map(item => {
        return (
            <Card 
            img = {item.img}
            rating = {item.stats.rating}
            reviews = {item.stats.reviews}
            country = {item.country}
            title = {item.title}
            price = {item.price}
            openSpots = {item.openSpots}
            />
        )
    })
    return (
        <div>
        <h1 style={{margin: "20px", width: "100%"}}>Genre 1 (Horror)</h1>
        <div className="genre1" style={{display: "flex"}}>
            {allCards}
        </div>
        <h1 style={{margin: "20px", width: "100%"}}>Genre 2 (Popular)</h1>
        <div className="genre2" style={{display: "flex"}}>
            {allCards2}
        </div>
    </div>
    );
}

ReactDOM.render(
    <><Nav /><Hero/><Cards/></>,
    document.getElementById('root')
)