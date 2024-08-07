import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import Darkmode from "./darkmode";

function Header() {
  return (
    <header
      className="bg-yellow-500 uppercase px-4 py-3 border-b dark:border-stone-600 border-stone-200 
    sm:px-6 flex items-center justify-between "
    >
      <Link to={"/"} className="tracking-widest text-stone-700">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
      <Darkmode/>
    </header>
  );
}

export default Header;
