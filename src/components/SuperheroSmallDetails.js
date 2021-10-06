const SuperheroSmallDetails = ({ hero }) => {
  return (
    <div className="small-details">
      <img src={hero.images.xs} alt={`${hero.name} thumbnail`} />
      <h3>{hero.name}</h3>
      <p class="sub-title">
        {hero.biography.fullName ? `(${hero.biography.fullName})` : ""}
      </p>
    </div>
  );
};

let p = 5
export default SuperheroSmallDetails;
