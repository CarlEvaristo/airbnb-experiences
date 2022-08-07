import React from "react"
import NavBar from "./Components/NavBar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"

function App() {
  return(
    <div className="container">
      <NavBar />
      <Hero />
      <section class="cards">
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  )
}

export default App