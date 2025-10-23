import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              Copyright &copy; 2025{" "}
              <a href="https://www.rockymountainweb.design">
                Rocky Mountain Web Design LLC
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
