import { Outlet } from "react-router-dom";
import LandingNavbar from "./navbar";
import LandingFooter from "./footer";

function LandingLayout() {
  return (
    <>
      <div className="relative h-auto overflow-x-hidden z-10 bg-putih">
        <LandingNavbar />
        <div className="my-36">
          <Outlet />
        </div>
        <LandingFooter />
      </div>
    </>
  );
}

export default LandingLayout;