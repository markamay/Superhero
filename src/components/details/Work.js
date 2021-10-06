import Row from "./Row";
import TableHeading from "./TableHeading";

const Work = ({ workDetails }) => {
  return (
    <table className="sub-details">
      <thead>
        <TableHeading heading="Work" />
      </thead>
      <tbody>
        <Row heading="Occupation" description={workDetails.occupation} />
        <Row heading="Base" description={workDetails.base} />
      </tbody>
    </table>
  );
};

export default Work;
