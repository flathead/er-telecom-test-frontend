interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  description: string;
  isSale: boolean;
  isSoldOut: boolean;
}

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

interface ProductListProps {
  products: Product[];
  onOrder: (product: Product) => void;
}

export type { Product, ProductCardProps, ProductListProps };
