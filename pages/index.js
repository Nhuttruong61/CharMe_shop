import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner, } from "../components";

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Sản Phẩm Bán Chạy Nhất</h2>
      <p>Áo thun nam nam</p>
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);
// lay tat ca du lieu sanity
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const newsQuery = '*[_type == "news"]';
  const newsData = await client.fetch(newsQuery);

  return {
    props: { products, bannerData, newsData },
  };
};

export default Home;
