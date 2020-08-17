import React from "react";
import { Navbar, NavbarBrand, NavItem, Nav, Collapse} from 'reactstrap'
import { NavLink, } from "react-router-dom";
import './NavBar.css';

export default function NavBar(props) {
  const componentsOnNavBar = [
    { title: 'Home', path: "/" },
    { title: 'About', path: "/about" },
  ];
    return (
      <div className="nav-bar">
        <Navbar>
          <NavbarBrand>NEED</NavbarBrand>
          <Collapse navbar>
            <Nav className="nav-thi ml-auto d-flex align-items-end" navbar>
              {componentsOnNavBar.map((link, key) => {
                return (
                  <NavItem key={key}>
                    <NavLink id='nav-link-text' to={link.path}>{link.title}</NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}
