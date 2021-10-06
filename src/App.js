import { useState, useEffect } from "react";
import Footer from "./components/Footer";

import Header from "./components/Header";
import SuperheroList from "./components/SuperheroList";

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getHeroes = async () => {
      const heroesFromServer = await fetchHeroes();
      setHeroes(heroesFromServer);
    };
    getHeroes();
  }, []);

  const fetchHeroes = async () => {
    const res = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    const data = await res.json();
    return data;
  };

  const modifySearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const getFilteredHeroes = () => {
    if (!searchTerm.trim()) return heroes;

    return heroes.filter((hero) => {
      const lowerCaseName = hero.name.toLowerCase();
      const lowerCaseFullName = hero.biography.fullName
        ? hero.biography.fullName.toLowerCase()
        : "";
      const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();

      return (
        lowerCaseName.includes(lowerCaseSearchTerm) ||
        lowerCaseFullName.includes(lowerCaseSearchTerm)
      );
    });
  };

  return (
    <div className="container main-content">
      <Header />
      <input
        type="text"
        value={searchTerm}
        onChange={modifySearchTerm}
        placeholder="Search for a hero"
      />
      <SuperheroList heroes={getFilteredHeroes()} />
      <Footer />
    </div>
  );
};

export default App;
