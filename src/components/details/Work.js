import Row from "./Row"
import TableHeading from "./TableHeading"

const Work = ({ workDetails }) => {
    return (
        <table className="sub-details">
            <TableHeading heading="Work" />
            <Row heading="Occupation" description={workDetails.occupation} />
        </table>
    )
}

export default Work
