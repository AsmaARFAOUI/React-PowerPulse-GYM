import "./contact.css";
import { Form, Button} from "react-bootstrap";

export default function Contact() {

    return(
        <div className="contacterNous my-5 py-5">
          <h2 className="text-center text-white">Contacter Nous</h2>
          <Form>
           <Form.Control type="text" placeholder="Nom" className="my-2  py-3 rounded-0"/>
           <Form.Control type="email" placeholder="Adresse email" className="my-2 py-3 rounded-0"/>
           <Form.Control type="number" placeholder="Téléphone" className="my-2 py-3 rounded-0"/>
           <Form.Control as="textarea" rows={3} placeholder="Message" className="my-2 py-3 rounded-0"/>
           <Button className="my-2 py-2 rounded-0">Envoyer</Button>
          </Form>
        </div>
    )
}