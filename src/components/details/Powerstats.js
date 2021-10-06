import Row from "./Row";
import TableHeading from "./TableHeading";

const Powerstats = ({ powerstats }) => {
  return (
    <table className="sub-details">
      <TableHeading heading="Power Stats" />
      <Row heading="Intelligence" description={powerstats.intelligence} />
      <Row heading="Strength" description={powerstats.strength} />
      <Row heading="Speed" description={powerstats.speed} />
      <Row heading="Durability" description={powerstats.durability} />
      <Row heading="Power" description={powerstats.power} />
      <Row heading="Combat" description={powerstats.combat} />
    </table>
  );
};

export default Powerstats;
