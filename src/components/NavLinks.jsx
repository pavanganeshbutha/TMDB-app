import { ClapperboardIcon, LibraryBigIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className=" lg:w-lg md:w-md  flex justify-evenly">
      <Link to="/movies" className="flex ">
        <span>
          <ClapperboardIcon />
        </span>
        <span className="ml-1">Movies</span>
      </Link>
      <Link to="/watchlist" className="flex">
        <span>
          <LibraryBigIcon />
        </span>
        <span className="ml-1">Watchlist</span>
      </Link>
    </div>
  );
};

export default NavLinks;
