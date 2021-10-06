const Filter = ({ searchTerm, modifySearchTerm }) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={modifySearchTerm}
        placeholder="Search for a hero (either by name or by good/bad affiliation)"
      />
    </div>
  );
};

export default Filter;
