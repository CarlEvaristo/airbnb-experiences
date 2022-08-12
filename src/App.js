import React from "react"
import NavBar from "./Components/NavBar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data" 

function App() {
  return(
    <div className="container">
      <NavBar />
      <Hero />
      <section className="cards">
        {
          data.map(item => {
            return (
              <Card 
                key={item.id}
                {...item}
              />
            )
          })
        }
      </section>
    </div>
  )
}

export default App