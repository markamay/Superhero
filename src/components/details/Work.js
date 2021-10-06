import Row from "./Row";
import TableHeading from "./TableHeading";

const Work = ({ workDetails }) => {
  return (
    <table className="sub-details">
      <TableHeading heading="Work" />
      <Row heading="Occupation" description={workDetails.occupation} />
      <Row heading="Base" description={workDetails.base} />
    </table>
  );
};

export default Work;
