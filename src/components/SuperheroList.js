import SuperheroCard from "./SuperheroCard"

const SuperheroList = ({ heroes }) => {
    return (
        <div>
            {heroes.map(hero => 
               <SuperheroCard hero={hero} /> 
            )}
        </div>
    )
}

export default SuperheroList
