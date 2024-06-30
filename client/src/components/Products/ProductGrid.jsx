import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name 1",
    price: 149,
    originalPrice: 199,
  },
  {
    image:
      "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name 2",
    price: 149,
    originalPrice: 199,
  },
  {
    image:
      "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name 3",
    price: 149,
    originalPrice: 199,
  },
  {
    image:
      "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name 4",
    price: 149,
    originalPrice: 199,
  },
  {
    image:
      "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name 5",
    price: 149,
    originalPrice: 199,
  },
  {
    image:
      "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name 6",
    price: 149,
    originalPrice: 199,
  },
];

const ProductGrid = () => {
  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-10 gold-head ">
          Popular Products
        </h1>
        <h1 className="text-3xl text-zinc-200">
          Make Your Mood With MDN Astha Mashale{" "}
        </h1>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
      {/* <div className="text-center py-10 px-10">
        <h2 className="font-bold text-2xl md:text-4xl mb-4">
          Thanks to{" "}
          <a
            href="https://unsplash.com/@nixcreative"
            className="underline font-black"
          >
            Tyler Nix
          </a>{" "}
          for those AMAZING product images!
        </h2>
      </div> */}
    </>
  );
};

export default ProductGrid;
