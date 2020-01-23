import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import NewUserModal from './NewUserModal'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-4">
        <NavbarBrand href="/">Ditigal Closet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavbarText>User</NavbarText>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Closets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Outfit</NavLink>
            </NavItem>
            <NavItem>
              <NewUserModal />
            </NavItem> 
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;