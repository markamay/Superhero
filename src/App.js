import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

import Header from "./components/Header";
import SuperheroList from "./components/SuperheroList";

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [heroFilterFunction, setHeroFilterFunction] = useState(() => (hero) => {
    return hero;
  });

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

  //determines which heroes are displayed
  const getFilteredHeroes = () => {
    //no search term, return all heroes that match the filter function
    if (!searchTerm.trim()) {
      return heroes.filter(heroFilterFunction);
    }

    //searching by name and filter function
    return heroes
      .filter((hero) => {
        const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();
        const lowerCaseName = hero.name.toLowerCase();
        const lowerCaseFullName = hero.biography.fullName
          ? hero.biography.fullName.toLowerCase()
          : "";

        return (
          lowerCaseName.includes(lowerCaseSearchTerm) ||
          lowerCaseFullName.includes(lowerCaseSearchTerm)
        );
      })
      .filter(heroFilterFunction);
  };

  return (
    <div className="container main-content">
      <Header />
      <Filter
        modifySearchTerm={modifySearchTerm}
        searchTerm={searchTerm}
        setHeroFilterFunction={setHeroFilterFunction}
      />
      <SuperheroList heroes={getFilteredHeroes()} />
      <Footer />
    </div>
  );
};

export default App;
