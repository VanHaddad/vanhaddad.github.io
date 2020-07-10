import React from "react"
import "bulma/css/bulma.css"
import Navbar from "./Navbar"
import Menu from "./Menu"
import Body from "./Body"

export default function Home() {
  return (
    <div className="container is-fluid px-0">
      <Navbar></Navbar>
      <div className="columns">
        <Menu></Menu>
        <Body></Body>
      </div>
    </div>
    // <div className="columns">
    //   <div className="column">Future home of VanHaddad.com</div>
    //   <div className="column">Future home of VanHaddad.com</div>
    // </div>
  )
}
