import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="border p-1 flex justify-between">
      <Link to="/">
        <h3 className="font-extrabold">TMDB</h3>
      </Link>

      <NavLinks />
    </div>
  );
};

export default Navbar;
