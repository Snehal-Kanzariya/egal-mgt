import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
