import { useState, useEffect } from 'react';

import Header from "./components/Header";
import SuperheroList from "./components/SuperheroList";

function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const getHeroes = async () => {
      const heroesFromServer = await fetchHeroes()
      setHeroes(heroesFromServer)
    }
    getHeroes()
  },[])

  const fetchHeroes = async () => {
    const res = await fetch("https://akabab.github.io/superhero-api/api/all.json")
    const data = await res.json()
    return data
  }

  return (
    <div className="container main-content">
      <Header />
      <SuperheroList heroes={heroes} />
    </div>
  );
}

export default App;
