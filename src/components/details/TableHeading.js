const TableHeading = ({ heading }) => {
  return (
    <tr>
      <th colSpan="2" className="sub-heading">
        {heading}
      </th>
    </tr>
  );
};

export default TableHeading;
