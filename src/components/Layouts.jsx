import React from "react";
import { Link, Outlet } from "react-router-dom";
import dates from "../assets/dates.png";

const Layouts = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={dates} alt="dates" /> <h2>AskTamra</h2>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Layouts;
