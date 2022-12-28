import styled from "styled-components";
import { popularProducts } from "../data";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Main = styled.div`
    color: inherit,
    textDecoration: none
`;
const Title = styled.h1`
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    text-align:center;
    color: black;
    text-decoration: none;
`;
const linkStyle = {
  textDecoration: "none",
  color: 'blue'
};


const ProductList = (cat, filters, sort) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5005/api/products?categories=${cat}`
            : "http://localhost:5005/api/products"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div>
      <Main>
        <Link to="/allproducts" style={linkStyle}>
          <Title>All Products</Title>
        </Link>
      </Main>
      <Container>
        {filteredProducts.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Container>
    </div >
  );
};

export default ProductList; 