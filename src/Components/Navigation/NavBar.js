import React from "react";
import { Navbar, NavbarBrand, NavItem, Nav} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  const componentsOnNavBar = [
    { title: "About", path: "/about" },
    { title: "Home", path: "/" },
  ];
  
  return (
    <Navbar className="nav-bar">
      <NavbarBrand className="navbrand">NEED</NavbarBrand>
      <Nav className="nav-item align-items-end ml-auto">
        {componentsOnNavBar.map((link, key) => {
          return (
            <NavItem key={key}>
              <NavLink id="nav-link-text" to={link.path}>
                {link.title}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </Navbar>
  );
}
