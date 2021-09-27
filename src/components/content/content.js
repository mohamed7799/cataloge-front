import Products from "./products/products";

const Content = ({ products }) => {
  return (
    <section>
      <Products products={products}></Products>{" "}
    </section>
  );
};

export default Content;
