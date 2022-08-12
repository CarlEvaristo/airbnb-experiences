import React from "react"


function Card(props) {
    let {coverImg,rating,reviewCount,title,price,openSpots,location} = props

    let badgeText
    if (openSpots === 0) {
        badgeText = "Sold Out"
    } else if (location === "Online") {
        badgeText = "Online"
    } 

    return(
        <div className="card">
            <div className="badge" style={{display: badgeText === undefined ? "none" : "block" }}>{badgeText}</div>
            <img src={`/images/${coverImg}`} alt="main-img" />
            <div className="rating">
                <img src="/images/star.png" alt="rating star" />
                <p>{rating} <span className="grey">({reviewCount}) · {location}</span></p>
            </div>

            <p>{title}</p>
            <p><strong>From ${price}</strong> / person</p>
        </div>
    )
}

export default Card