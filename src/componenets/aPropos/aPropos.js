import "./aPropos.css";
import { Row, Col, Button } from "react-bootstrap";
import aProposImg from "../../assets/img/aProposImg.jpg";

export default function APropos() {

    return(
        <Row className="aPropos my-5 d-flex" id="aPropos">
          <Col className="mx-auto px-5">
           <div >
            <h3>Qui Sommes Nous ?</h3><hr/>
            <p>PowerPulse GYM - Votre destination pour une transformation 
             physique et mentale. Nous sommes passionnés par votre bien-être 
             et votre réussite dans votre parcours de remise en forme. Avec 
             des équipements de pointe, des entraîneurs dévoués et une ambiance
             motivante, nous sommes là pour vous aider à atteindre vos 
             objectifs. Rejoignez-nous chez PowerPulse GYM et commencez à 
             sculpter la meilleure version de vous-même.</p>
            </div>
             <Button className="aProposBtn">Voir Plus</Button>
          </Col>
          <Col className="d-flex justify-content-center">
           <img src={aProposImg} alt="power pulse gym image" /> 
          </Col>
        </Row>
    )
}