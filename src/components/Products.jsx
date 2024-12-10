import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

export const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if(status === 'loading')
  {
    return <h1>LOADING</h1>
  }

  if(status === 'error')
    {
      return <h1>Something Might Went Wrong</h1>
    }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3 ">
      <Card className="flex flex-wrap" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          height="150rem"
          width="150rem"
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Products Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};
