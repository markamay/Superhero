import Appearance from "./details/Appearance"
import Powerstats from "./details/Powerstats"
import Biography from "./details/Biography"
import Work from "./details/Work"

const SuperheroFullDetails = ({ hero }) => {
    return (
        <div>
            <table className="full-details">
                <tr>
                    <th>{hero.name}</th>
                </tr>
                <tr>
                    <td>
                        <img src={hero.images.sm} alt={`${hero.name} avatar`} />
                    </td>
                </tr>
                <tr>
                    <Biography biography={hero.biography} />
                </tr>
                <tr>
                    <Appearance appearance={hero.appearance} />
                </tr>
                <tr>
                    <Powerstats powerstats={hero.powerstats} />
                </tr>
                <tr>
                    <Work workDetails={hero.work} />
                </tr>
            </table>
            
        </div>
    )
}

export default SuperheroFullDetails
