const SuperheroSmallDetails = ({ hero }) => {
  return (
    <div className="small-details">
      <img src={hero.images.xs} alt={`${hero.name} thumbnail`} />
      <h3>{hero.name}</h3>
      <p className="sub-title">
        {hero.biography.fullName ? `(${hero.biography.fullName})` : ""}
      </p>
    </div>
  );
};

export default SuperheroSmallDetails;
