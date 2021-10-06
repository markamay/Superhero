import Appearance from "./details/Appearance";
import Powerstats from "./details/Powerstats";
import Biography from "./details/Biography";
import Work from "./details/Work";

const SuperheroFullDetails = ({ hero }) => {
  return (
    <div className="full-details">
      <h2>{hero.name}</h2>

      <img src={hero.images.sm} alt={`${hero.name} avatar`} />

      <Biography biography={hero.biography} />

      <Appearance appearance={hero.appearance} />

      <Powerstats powerstats={hero.powerstats} />

      <Work workDetails={hero.work} />
    </div>
  );
};

export default SuperheroFullDetails;
