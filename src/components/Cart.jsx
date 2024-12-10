import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-12 ">
      <Card
        className="flex flex-wrap"
        style={{ width: "18rem", height: "18rem" }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "5rem", height: "5rem" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>Cart</h1>
      <div className="row">{cards}</div>
    </>
  );
};
