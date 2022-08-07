import React from "react"
import Logo from "./Vector.png"

function NavBar(){
    return(
        <section className="nav">  
            <img src={Logo} alt="airbnb logo" />
        </section>
    )
}

export default NavBar