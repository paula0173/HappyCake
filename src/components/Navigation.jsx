import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <Navbar bg="danger"  >
      <Container className="justify-content-start">
        <div>
          <img src="src/assets/Home.jpg" width="20" height="20" alt=""></img>
          <Link
            to="/"
            className="m-1 text-white text-decoration-none"> Home </Link>
        </div>

        <div className="p-2">
          <img  src="src/assets/Contacto.jpg" width="20" height="20" alt=""></img>
          <Link
            to="/contacto"
            className="text-white text-decoration-none"> Contacto </Link>
        </div>
      </Container>

      <Container className="justify-content-end">
        <img src="src/assets/Cakepiece.jpg" width="30" height="30" alt=""></img>
        <Navbar.Brand className="text-white" >Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Navigation;