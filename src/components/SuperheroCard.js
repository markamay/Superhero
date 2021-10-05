const SuperheroCard = ({ hero }) => {
    return (
        <div>
            <div className="superhero-card">
                <img src={hero.images.xs} alt={`${hero.name} thumbnail`}/>
                <h3>{hero.name}</h3>
                <p class="sub-title">
                {hero.biography.fullName ? `(${hero.biography.fullName})` : ""}
                </p>
            </div>
        </div>
    )
}

export default SuperheroCard
