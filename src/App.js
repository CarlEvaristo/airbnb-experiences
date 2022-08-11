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
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
              />
            )
          })
        }
      </section>
    </div>
  )
}

export default App