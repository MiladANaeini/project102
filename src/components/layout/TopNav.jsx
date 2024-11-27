import { NavLink } from "react-router-dom";
import { ROUTES_URL } from "../../common/constants/RoutesUrl";

const TopNav = () => {
  return (
    <header className="flex items-center justify-between text-sm font-normal bg-white px-5 leading-10 shadow-xl">
      <NavLink to={ROUTES_URL.HOME}>Home</NavLink>
    </header>
  );
};

export default TopNav;
