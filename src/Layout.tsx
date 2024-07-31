import React from "react";
import { Outlet } from "../node_modules/react-router-dom/dist/index.js";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export { Layout };
