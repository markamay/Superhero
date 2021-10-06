import Row from "./Row";
import TableHeading from "./TableHeading";

const Appearance = ({ appearance }) => {
  return (
    <table className="sub-details">
      <thead>
        <TableHeading heading="Appearance" />
      </thead>
      <tbody>
        <Row heading="Gender" description={appearance.gender} />
        <Row heading="Race" description={appearance.race} />
        <Row heading="Height" description={appearance.height[0]} />
        <Row heading="Weight" description={appearance.weight[0]} />
        <Row heading="Eye Color" description={appearance.eyeColor} />
        <Row heading="Hair Color" description={appearance.hairColor} />
      </tbody>
    </table>
  );
};

export default Appearance;
