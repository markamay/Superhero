import Row from "./Row"
import TableHeading from "./TableHeading"

const Work = ({ workDetails }) => {
    return (
        <table className="full-details">
            <TableHeading heading="Work" />
            <Row heading="Occupation" description={workDetails.occupation} />
        </table>
    )
}

export default Work
