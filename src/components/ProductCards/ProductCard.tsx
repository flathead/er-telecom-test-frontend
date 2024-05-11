import React, { useState } from "react";
import { Button, Card, Modal, ModalContent } from "../../data/styles";
import { ProductCardProps } from "../../data/interfaces";

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  const [loading, setLoading] = useState(false);

  const handleOrder = () => {
    setLoading(true);
    onOrder(product);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Card isSale={product.isSale} isSoldOut={product.isSoldOut}>
      <h2>{product.title}</h2>
      <h3>{product.subtitle}</h3>
      <p>{product.price}</p>
      <img src={product.image} alt={product.title} width={"100%"} />
      <p>{product.description}</p>
      <Button onClick={handleOrder}>
        {loading ? "Добавляем в корзину" : "Заказать"}
      </Button>
      {loading && (
        <Modal>
          <ModalContent>Загрузка...</ModalContent>
        </Modal>
      )}
    </Card>
  );
};

export default ProductCard;
