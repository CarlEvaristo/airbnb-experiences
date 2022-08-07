import React from "react"
import HeroImg from "../images/hero-img.png"

function Hero() {
    return(
        <section>
            <img src={HeroImg} alt="hero" className="hero"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero