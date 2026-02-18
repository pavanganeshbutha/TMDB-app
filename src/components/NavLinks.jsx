import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="border lg:w-lg md:w-md  flex justify-evenly ">
      <Link to="/movies">Movies</Link>
      <Link to="/watchlist">Watchlist</Link>
    </div>
  );
};

export default NavLinks;
