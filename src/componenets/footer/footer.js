import "./footer.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import tweeter from "../../assets/img/tweeter.png";

export default function Footer() {

    return(
        <div className="footer">
            <Row>
            <Col className="footerLogo" xs={12} md={6} lg={3}>
             <h4>PowerPulse GYM</h4>
             <p>Découvrez la puissance de la transformation chez PowerPulse 
                Gym.</p>
            </Col>
            <Col className="lienUtiles" xs={12} md={6} lg={3}>
             <h4>Liens Utiles</h4>
             <ul>
                <li><a href="#acceuil">Acceuil</a></li>
                <li><a href="#aPropos">A propos</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
             </ul>
            </Col>
            <Col className="footerContact" xs={12} md={6} lg={3}>
             <h4>Contact</h4>
             <div className="d-flex">
              <i className="bi bi-geo-alt-fill me-1"></i>
              <p>11, Av. 20 Mars, Bardo, 2000 Tunis</p>
             </div>
             <div className="d-flex">
              <i className="bi bi-telephone-fill me-1"></i>
              <p>+216 71 845 965</p>
             </div>
             <div className="d-flex">
              <i className="bi bi-envelope-fill me-1"></i>
              <p>powerpulsegym@gmail.com</p>
             </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
             <h4>Newsletter</h4>
            <Form>
             <Form.Control type="email" placeholder="Entrez votre adresse e-mail" className="rounded-0" />
             <Button className="sInscrirBtn mt-2">S'inscrire</Button>
            </Form>
            <div className="mt-2">
              <img src={facebook} alt="facebook" className="me-2"/>
              <img src={instagram} alt="instagram" className="me-2"/>
              <img src={tweeter} alt="tweeter" className="me-2"/>
            </div>
            </Col>
        </Row>
         <div className="text-center mt-3">
          <h6>&#169;  2023 Tous droits réservés. Design inspiré des Templates ThemeWagon</h6>
         </div>
        </div>
    )
}