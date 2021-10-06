const FullFilterForm = ({ setHeroFilterFunction }) => {
  const modifyFilter = (e) => {
    setHeroFilterFunction(() => (hero) => {
      if (e.target.value === "any") {
        return true;
      } else {
        return hero.biography.alignment === e.target.value;
      }
    });
  };

  return (
    <div className="full-filter-form">
      <label for="affiliation">Affiliation:</label>
      <select name="affiliation" id="affiliation" onChange={modifyFilter}>
        <option value="any" selected>
          Any
        </option>
        <option value="good">Good</option>
        <option value="bad">Bad</option>
        <option value="neutral">Neutral</option>
      </select>
    </div>
  );
};

export default FullFilterForm;
