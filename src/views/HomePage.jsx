import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="p-5 text-center">
      <h1 className="">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h6 className="text-dark"> El lugar de los pasteles felices </h6>
      <img src="src/assets/Cake.png" alt="not found" />
    </Container>
  );
};
export default HomePage;
