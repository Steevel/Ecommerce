import { styled } from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

// const config = {
//   headers: {
//     token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjRkMTUwNWM4NGQxNjBmOTU3N2UzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDI3NzI5MCwiZXhwIjoxNjkwNTM2NDkwfQ.WPAx9b82t5INivJBwYMZ5q4ZI7--LH-R73r6E9DG9eE`,
//   },
// };

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
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
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
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 4)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
