import React from "react";
import ProductCard from "./ProductCard";
import { Title, ProductUl } from "../../data/styles";
import { ProductListProps } from "../../data/interfaces";

const ProductList: React.FC<ProductListProps> = ({ products, onOrder }) => {
  return (
    <>
      <Title>Товары</Title>
      <ProductUl>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOrder={onOrder} />
        ))}
      </ProductUl>
    </>
  );
};

export default ProductList;
