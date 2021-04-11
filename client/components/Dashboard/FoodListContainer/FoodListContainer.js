import React from "react";
// import "../../../styles/bootstrap/grid.min.css";
import Image from "next/image";
import Head from "next/head";

const FoodListContainer = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="styles/bootstrap/grid.min.css" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto">
            <Image
              src="/assets/foods/brooke-lark-1Rm9GLHV0UA-unsplash.png"
              width="40px"
              height="50px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodListContainer;
