import React from "react";
import classes from "./Dashboard.module.css";
import styled from "styled-components";
import FoodListContainer from "../../components/Dashboard/FoodListContainer/FoodListContainer";
import BottomNavigation from "../../components/Dashboard/BottomNavigation/BottomNavigation";

const Title = styled.div`
  width: 80%;
  margin: 5% auto 5%;

  h1 {
    font-family: Proxima Nova Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 43px;
    background: linear-gradient(
      68.94deg,
      #ff5200 17.46%,
      rgba(255, 82, 0, 0) 212.84%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Dashboard = () => {
  return (
    <section className={classes.Dashboard}>
      <Title>
        <h1>What do you want to cook, Parag?</h1>
      </Title>

      <FoodListContainer />
      <BottomNavigation />
    </section>
  );
};

export default Dashboard;
