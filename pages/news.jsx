import React from "react";
import { client } from "../lib/client";
import { Product } from "../components";

const news = ({ products, }) => {
  return (
    <>
      
      <div className="products-container">
        {products
          ?.filter((product) => product.bestseller == true)
          .map((product) => (
            <>
              <Product key={product._id} product={product} />
            </>
          ))}
      </div>
    </>
  );
};

// get all data from sanity
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default news;