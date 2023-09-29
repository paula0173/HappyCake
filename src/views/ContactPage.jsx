import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactPage = () => {
    return (
        <Container className="text-center">
            <h2 className="p-3">
                Cuentanos, ¿en que te podemos ayudar?
            </h2>

            <Form className="p-3">
                <Form.Group className="mb-3" controlId="EmailInput">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="DescriptionTextarea">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="danger">Enviar</Button>
            </Form>
        </Container>
    );
};
export default ContactPage;
