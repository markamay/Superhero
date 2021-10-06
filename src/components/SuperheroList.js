import NoHeroesFound from "./NoHeroesFound";
import SuperheroCard from "./SuperheroCard";

const SuperheroList = ({ heroes }) => {
  return (
    <div>
      {heroes.length ? (
        heroes.map((hero) => <SuperheroCard key={hero.id} hero={hero} />)
      ) : (
        <NoHeroesFound />
      )}
    </div>
  );
};

export default SuperheroList;
