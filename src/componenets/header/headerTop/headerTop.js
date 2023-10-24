import "./headerTop.css";
import { Row, Col } from "react-bootstrap";

export default function HeaderTop() {

    return(
     <Row className="headerTop mx-auto justify-content-center pt-2" id="accueil">
        <Col className="d-flex">
         <i className="bi bi-geo-alt-fill"></i>
         <p className="d-none d-md-block">11, Av. 20 Mars, Bardo, 2000 Tunis</p>
        </Col>
        <Col className="d-flex justify-content-center">
         <i className="bi bi-telephone-fill"></i>
         <p className="d-none d-md-block">+216 71 845 965</p>
        </Col>
        <Col className="d-flex justify-content-center">
         <i className="bi bi-envelope-fill"></i>
         <p className="d-none d-md-block">powerpulsegym@gmail.com</p>
        </Col>
     </Row>     
    )
}