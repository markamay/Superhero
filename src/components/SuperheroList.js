import SuperheroCard from "./SuperheroCard";

const SuperheroList = ({ heroes }) => {
  return (
    <div>
      {heroes.map((hero) => (
        <SuperheroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default SuperheroList;
