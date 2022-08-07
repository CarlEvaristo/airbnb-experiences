import React from "react"
import CardImage from "../images/katie-zaferes.png"
import StarImage from "../images/star.png"


function Card() {
    return(
        <div class="card">
            <div class="badge"><p>SOLD OUT</p></div>
            <img src={CardImage} alt="card avatar"/>
            <div class="rating">
                <img src={StarImage} alt="rating star" />
                <p>5.0 <span class="grey">(6) · USA</span></p>
            </div>

            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    )
}

export default Card