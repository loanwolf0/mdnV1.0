import React from "react";
import Producttop from "../../components/Products/Producttop";
import ProductGrid from "../../components/Products/ProductGrid";

const Product = () => {
  return (
    <div className="bg-zinc-900">
      <Producttop />
      <ProductGrid />
    </div>
  );
};

export default Product;
