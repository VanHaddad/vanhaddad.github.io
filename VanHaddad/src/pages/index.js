import React from "react";
import 'bulma/css/bulma.css';
import Navbar from "./Navbar";
import Menu from "./Menu";

export default function Home() {
  return(
    <div className="container is-fluid px-0">
      <Navbar></Navbar>
      <Menu></Menu>
    </div>
    // <div className="columns">
    //   <div className="column">Future home of VanHaddad.com</div>
    //   <div className="column">Future home of VanHaddad.com</div>
    // </div>
  );
}
