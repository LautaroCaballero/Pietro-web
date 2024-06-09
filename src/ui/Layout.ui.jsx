import { Outlet } from "react-router-dom";
import { Navbar } from "./interfaces/Navbar.interface";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
