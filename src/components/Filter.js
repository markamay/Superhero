import { useState } from "react";
import FullFilterForm from "./FullFilterForm";

const Filter = ({ searchTerm, modifySearchTerm, setHeroFilterFunction }) => {
  const [showFullFilterForm, setShowFullFilterForm] = useState(false);

  const toggleShowFullFilterForm = () => {
    setShowFullFilterForm(!showFullFilterForm);
  };

  return (
    <div className="filter-form">
      <input
        type="text"
        value={searchTerm}
        onChange={modifySearchTerm}
        placeholder="Search for a hero"
      />
      <button className="filter-button" onClick={toggleShowFullFilterForm}>
        {showFullFilterForm ? "Hide" : "Show"} Filter Options
      </button>
      {showFullFilterForm && (
        <FullFilterForm setHeroFilterFunction={setHeroFilterFunction} />
      )}
    </div>
  );
};

export default Filter;
