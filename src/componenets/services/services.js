import "./services.css";
import { Row, Col, Card } from "react-bootstrap";

export default function Services() {

    return(
        <div className="nosServices">
          <h2 className="text-center">Nos Services</h2>
          <div className="nosServicesCards d-flex justify-content-center">
           <Card style={{ width: '18rem' }} className="nosServicesCard">
            <Card.Body className="cardBody">
             <Card.Title className="cardTitle">Entraînement Personnel</Card.Title>
             <Card.Text className="cardText">
              Bénéficiez de séances d'entraînement individuelles avec nos coachs expérimentés pour atteindre vos objectifs de remise en forme de manière efficace.
             </Card.Text>
             <Card.Link href="#" className="cardLink">Voir Plus</Card.Link>
            </Card.Body>
           </Card>
           <Card style={{ width: '18rem' }} className="nosServicesCard">
            <Card.Body className="cardBody">
             <Card.Title className="cardTitle">Cours Collectifs</Card.Title>
             <Card.Text className="cardText">
              Rejoignez nos cours collectifs variés, de la danse au yoga, pour vous divertir tout en améliorant votre condition physique.
             </Card.Text>
             <Card.Link href="#" className="cardLink">Voir Plus</Card.Link>
            </Card.Body>
           </Card>
           <Card style={{ width: '18rem' }} className="nosServicesCard">
            <Card.Body className="cardBody">
             <Card.Title className="cardTitle">Équipements de Pointe </Card.Title>
             <Card.Text className="cardText">
             Profitez d'un accès à nos installations de pointe, y compris des équipements de cardio, de musculation et des espaces d'entraînement fonctionnel.
             </Card.Text>
             <Card.Link href="#" className="cardLink">Voir Plus</Card.Link>
            </Card.Body>
           </Card>
           <Card style={{ width: '18rem' }} className="nosServicesCard">
            <Card.Body className="cardBody">
             <Card.Title className="cardTitle">Programme Nutritionnel </Card.Title>
             <Card.Text className="cardText">
              Obtenez des conseils nutritionnels personnalisés pour optimiser vos performances et atteindre une alimentation équilibrée.
             </Card.Text>
             <Card.Link href="#" className="cardLink">Voir Plus</Card.Link>
            </Card.Body>
           </Card>
           <Card style={{ width: '18rem' }} className="nosServicesCard">
            <Card.Body className="cardBody">
             <Card.Title className="cardTitle">Suivi de Progression </Card.Title>
             <Card.Text className="cardText">
              Nous offrons un suivi régulier de votre progression pour vous aider à rester motivé et à atteindre vos objectifs.
             </Card.Text>
             <Card.Link href="#" className="cardLink">Voir Plus</Card.Link>
            </Card.Body>
           </Card>
           <Card style={{ width: '18rem' }} className="nosServicesCard">
            <Card.Body className="cardBody">
             <Card.Title className="cardTitle">Espace Détente </Card.Title>
             <Card.Text className="cardText">
             Détendez-vous dans notre espace spa et sauna après une séance d'entraînement intense.
             </Card.Text>
             <Card.Link href="#" className="cardLink">Voir Plus</Card.Link>
            </Card.Body>
           </Card>
          </div>
        </div>
    )
}