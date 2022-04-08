// import './App.css';
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

export default function App() {
  const Cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item} //pass item down, has to add item to props
        // {...item} - spread syntax - does not need to write item on props
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{Cards}</section>
    </div>
  );
}

// This is what item={item} is doing. It takes all the items avalible in the data file to use.
// coverImg={item.coverImg}
// rating={item.stats.rating}
// reviewCount={item.stats.reviewCount}
// location={item.location}
// title={item.title}
// price={item.price}
// openSpots={item.openSpots}
