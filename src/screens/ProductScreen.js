import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen() {
  // Get the product ID from the URL
  const match = useParams();
  // Find the product in the products array
  const product = products.find((p) => p._id == match.id);
  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            className="rounded"
            alt={product.name}
            src={product.image}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                <strong>
                  ${product.price}
                </strong>
                </Col>
              </Row>
              </ListGroup.Item>

              <ListGroup.Item>
              <Row>
                <Col>In Stock:</Col>
                <Col>
                <strong>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </strong>
                </Col>
              </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className="btn-block" type='botton' disabled={product.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>

            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
<Row>
  <Col>
  Price:
  </Col>
</Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
