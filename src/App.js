import './App.css';
import { Container } from 'react-bootstrap';
import Header from "./componenets/header/header";
import APropos from './componenets/aPropos/aPropos';
import Footer from './componenets/footer/footer';
import Contact from './componenets/contact/contact';
import Services from './componenets/services/services';

function App() {
  return (
    <Container fluid>
      <Header />
      <APropos />
      <Services />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
