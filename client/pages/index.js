import React from "react";
import withPrivateRoute from "../hoc/withPrivateRoute";

const Home = () => {
  return (
    <div>
      <h1>Dashboard...........!</h1>
    </div>
  );
};

export default withPrivateRoute(Home);
