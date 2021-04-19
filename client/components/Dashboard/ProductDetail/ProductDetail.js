import clsx from "clsx";
import React from "react";
import classes from "./ProductDetail.module.css";

const ProductDetail = ({ image, name }) => {
  // const ratings = {
  //   hotel_a: 2.8,
  //   hotel_b: 3.3,
  //   hotel_c: 1.9,
  //   hotel_d: 4.3,
  //   hotel_e: 4.74,
  // };

  //     const starTotal = 5;

  // for(const rating in ratings) {
  //   // 2
  //   const starPercentage = (ratings[rating] / starTotal) * 100;
  //   // 3
  //   const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  //   // 4
  //   document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
  // }
  return (
    <div className={clsx("col-6 mb-3", classes.ProductDetail)}>
      <div className={classes.Product_Image}>
        <div className={classes.Image}>
          <img src={image} />
        </div>
        <div className={classes.Heart_Icon}>
          <img src="/assets/icons/heart.svg" />
        </div>
      </div>
      <div className={clsx("col-10 m-auto pb-2", classes.Detail)}>
        <h1 className={clsx(classes.Name, "mb-1")}>{name}</h1>
        <div className={clsx("d-flex mb-2", classes.Start_Rating)}>
          <div className={classes.stars_outer}>
            <div className={classes.stars_inner}></div>
          </div>
        </div>
        {/* <img src="/assets/icons/star.svg" />
          <img src="/assets/icons/star.svg" />
          <img src="/assets/icons/star.svg" />
          <img src="/assets/icons/star.svg" />
          <img src="/assets/icons/star.svg" /> */}

        <div className={classes.Time}>
          <p> Ø time: 40min</p>
        </div>

        <div className={clsx(classes.Product_Price, "mt-2")}>
          <h3>Average Price:</h3>
          <h1 className={clsx(classes.Price)}>40$</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
