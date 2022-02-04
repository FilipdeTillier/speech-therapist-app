import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

export const Layout = (): ReactElement => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
