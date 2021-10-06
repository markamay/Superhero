import React from "react";
import Row from "./Row";
import TableHeading from "./TableHeading";

const Biography = ({ biography }) => {
  const aliases = biography.aliases.join(", ");
  return (
    <table className="sub-details">
      <thead>
        <TableHeading heading="Biography" />
      </thead>
      <tbody>
        <Row heading="Full Name" description={biography.fullName} />
        <Row heading="Alter Egos" description={biography.alterEgos} />
        <Row heading="Aliases" description={aliases} />
        <Row heading="Place of Birth" description={biography.placeOfBirth} />
        <Row
          heading="First Appearance"
          description={biography.firstAppearance}
        />
        <Row heading="Publisher" description={biography.publisher} />
        <Row heading="Alignment" description={biography.alignment} />
      </tbody>
    </table>
  );
};

export default Biography;
