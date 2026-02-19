import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import {
  MenuIcon,
  XIcon,
  ClapperboardIcon,
  LibraryBigIcon,
} from "lucide-react";
import { Fragment, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleButton = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <div className="p-1 flex justify-between items-center">
        <Link to="/">
          <h3 className="font-extrabold">TMDB</h3>
        </Link>
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <XIcon onClick={toggleButton} />
          ) : (
            <MenuIcon onClick={toggleButton} />
          )}
        </div>
        <div className="hidden md:block">
          <NavLinks />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="bg-blue-700 md:hidden" onClick={toggleButton}>
          <Link to="/movies" className="flex justify-center items-center p-2 ">
            <span>
              <ClapperboardIcon />
            </span>
            <span className="ml-1">Movies</span>
          </Link>
          <Link
            to="/watchlist"
            className="flex justify-center items-center p-2"
          >
            <span>
              <LibraryBigIcon />
            </span>
            <span className="ml-1">Watchlist</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
