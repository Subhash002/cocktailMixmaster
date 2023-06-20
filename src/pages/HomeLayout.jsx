import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <>
      <Navbar />
      <section className="page">
        {state === "loading" ? <div className="loading"></div> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
