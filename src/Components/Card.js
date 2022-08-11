import React from "react"


function Card({img,rating,reviewCount,country,title,price}) {
    return(
        <div className="card">
            <img src={`/images/${img}`} alt="main-img" />
            <div className="rating">
                <img src="/images/star.png" alt="rating star" />
                <p>{rating} <span className="grey">({reviewCount}) · {country}</span></p>
            </div>

            <p>{title}</p>
            <p><strong>From ${price}</strong> / person</p>
        </div>
    )
}

export default Card