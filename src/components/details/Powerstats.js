import Row from "./Row";
import TableHeading from "./TableHeading";

const Powerstats = ({ powerstats }) => {
  return (
    <table className="sub-details">
      <thead>
        <TableHeading heading="Power Stats" />
      </thead>
      <tbody>
        <Row heading="Intelligence" description={powerstats.intelligence} />
        <Row heading="Strength" description={powerstats.strength} />
        <Row heading="Speed" description={powerstats.speed} />
        <Row heading="Durability" description={powerstats.durability} />
        <Row heading="Power" description={powerstats.power} />
        <Row heading="Combat" description={powerstats.combat} />
      </tbody>
    </table>
  );
};

export default Powerstats;
