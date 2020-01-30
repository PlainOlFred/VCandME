import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
import LogoffUser from './LogoffUser'
import LoginModal from './LoginModal';

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
              <Link to='/closet'>Closets</Link>
            </NavItem>
            <NavItem>
              <Link to='/outfits'>Outfit</Link>
            </NavItem>
            <NavItem>
              <NewUserModal />
            </NavItem>
            <NavItem>
              <LogoffUser />
            </NavItem> 
            <NavItem>
              <LoginModal />
            </NavItem> 
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;