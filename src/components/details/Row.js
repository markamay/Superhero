import React from "react";

const Row = ({ heading, description }) => {
  //Making sure description actually has data and isn't undefined
  let fixed_description;
  if (!description || description === "-") {
    fixed_description = "N/A";
  } else {
    fixed_description = description;
  }

  return (
    <tr>
      <th>{heading}</th>
      <td>{fixed_description}</td>
    </tr>
  );
};

export default Row;
