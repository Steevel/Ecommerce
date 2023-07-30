import { styled } from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `${import.meta.env.VITE_BASE_URL}/api/products?category=${cat}`
            : `${import.meta.env.VITE_BASE_URL}/api/products`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err.message);
      }
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
        [...prev].sort((item1, item2) => item1.createdAt - item2.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((item1, item2) => item1.price - item2.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((item1, item2) => item2.price - item1.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 4)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
