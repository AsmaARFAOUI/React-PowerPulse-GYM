import "./navigation.css";
import { Nav, Navbar, Button } from 'react-bootstrap';

export default function Navigation() {

    return(
       <div className="navigation">
        <Navbar expand="lg" className="mb-lg-5">
        <Navbar.Brand href="#home" className="logo text-white">PowerPulse GYM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto heroLinks">
            <Nav.Link href="#accueil" className="text-white mx-2 heroLink">Accueil</Nav.Link>
            <Nav.Link href="#aPropos" className="text-white mx-2 heroLink">À propos</Nav.Link>
            <Nav.Link href="#home" className="text-white mx-2 heroLink">Services</Nav.Link>
            <Nav.Link href="#link" className="text-white mx-2 heroLink">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Navbar>
       <div className="heroContent">
        <h2 className="text-white my-3">Transformez votre vie</h2>
        <h2 className="textGreen">Repoussez vos limites et atteignez vos objectifs </h2>
        <p className="text-white">Bienvenue à PowerPulse Gym, où chaque goutte de sueur vous rapproche de la victoire.</p>
        <div className="mt-lg-5">
         <Button className="heroBtn readMoreBtn btnGreen mx-2 p-3">Read More</Button>
         <Button className="heroBtn contactUsBtn btnGreen mx-2 p-3">Contact Us</Button>
        </div>
       </div>
      </div>
    )
}