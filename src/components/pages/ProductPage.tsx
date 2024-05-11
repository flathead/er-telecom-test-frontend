import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../ProductCards/ProductList";
import { Product } from "../../data/interfaces";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      const products: Product[] = response.data.map((product: any) => ({
        ...product,
        isSale: Math.random() < 0.1,
        isSoldOut: Math.random() < 0.1,
      }));
      setProducts(products);
    });
  }, []);

  const handleOrder = (product: Product) => {
    setTimeout(() => {
      if (product.isSale) {
        alert("Поздравляем, на этот заказ распространяется скидка");
      } else if (product.isSoldOut) {
        alert("К сожалению, этот товар закончился");
        setProducts(products.filter((p) => p.id !== product.id));
      } else {
        alert("Товар успешно заказан");
      }
    }, 2000);
  };

  return (
    <>
      <ProductList products={products} onOrder={handleOrder} />
    </>
  );
};

export default ProductPage;
