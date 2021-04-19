import React from "react";
import Head from "next/head";
import clsx from "clsx";
import ProductDetail from "../ProductDetail/ProductDetail";
import classes from "./FoodListContainer.module.css";

const FoodListContainer = () => {
  const products = [
    {
      name: "healthy snack 1",
      image: "/assets/foods/brooke-lark-1Rm9GLHV0UA-unsplash.png",
    },
    {
      name: "sunday breakfast 2",
      image: "/assets/foods/rachel-park-hrlvr2ZlUNk-unsplash.png",
    },
    {
      name: "sunday breakfast 3",
      image: "/assets/foods/brooke-lark-1Rm9GLHV0UA-unsplash.png",
    },
    {
      name: "sunday breakfast 4",
      image: "/assets/foods/rachel-park-hrlvr2ZlUNk-unsplash.png",
    },
    {
      name: "sunday breakfast 5",
      image: "/assets/foods/rachel-park-hrlvr2ZlUNk-unsplash.png",
    },
    {
      name: "sunday breakfast 6",
      image: "/assets/foods/rachel-park-hrlvr2ZlUNk-unsplash.png",
    },
    {
      name: "sunday breakfast 7",
      image: "/assets/foods/rachel-park-hrlvr2ZlUNk-unsplash.png",
    },
    {
      name: "sunday breakfast 8",
      image: "/assets/foods/rachel-park-hrlvr2ZlUNk-unsplash.png",
    },
  ];

  return (
    <>
      <Head>
        <link rel="stylesheet" href="styles/bootstrap/grid.min.css" />
      </Head>
      <div className="container mt-3">
        <div className={clsx(classes.Row)}>
          <div className={classes.List}>
            {products.map((product, i) => {
              if (i % 2 === 0) {
                return (
                  <ProductDetail image={product.image} name={product.name} />
                );
              }
            })}
          </div>
          <div className={classes.List}>
            {products.map((product, i) => {
              if (i % 2) {
                return (
                  <ProductDetail image={product.image} name={product.name} />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodListContainer;
