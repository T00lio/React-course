import { Col, Row } from "reactstrap"
import CampsiteCard from "./CampsiteCard";
import  {CAMPSITES}  from "../../app/shared/CAMPSITES";

const CampsitesList = () => {
    return (
    <Row className="ms-auto row">
        {CAMPSITES.map((campsite) => {
        return (
            <Col md="5" className="m-4" key={campsite.id}>
                <CampsiteCard campsite={campsite} />
            </Col>
        );
        })}
    </Row>
    );
};

export default CampsitesList;
