import { useState } from "react";
import SuperheroFullDetails from "./SuperheroFullDetails";
import SuperheroSmallDetails from "./SuperheroSmallDetails";

const SuperheroCard = ({ hero }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const toggleDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  const hero_alignment = hero.biography.alignment;
  let alignment_color;
  if (hero_alignment === "good") {
    alignment_color = "green";
  } else if (hero_alignment === "bad") {
    alignment_color = "red";
  } else {
    alignment_color = "gray";
  }

  return (
    <div
      className="superhero-card-border"
      style={{ backgroundColor: alignment_color }}
    >
      <div className="superhero-card" onClick={toggleDetails}>
        {showFullDetails ? (
          <SuperheroFullDetails hero={hero} />
        ) : (
          <SuperheroSmallDetails hero={hero} />
        )}
      </div>
    </div>
  );
};

export default SuperheroCard;
