const SuperheroCard = ({ hero }) => {
    const hero_alignment = hero.biography.alignment;
    let alignment_color;
    if (hero_alignment === 'good') {
        alignment_color = 'green';
    } else if (hero_alignment ==='bad') {
        alignment_color = 'red';
    } else {
        alignment_color = 'gray';
    }

    return (
        <div className="superhero-card-border" style={{backgroundColor: alignment_color}}>
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
