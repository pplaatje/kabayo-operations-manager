import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand } from "reactstrap"
import { NavLink } from "react-router-dom";

const TopMenu = (args: any) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = (e:any) => {
    e.stopPropagation();
    setDropdownOpen((prevState) => !prevState);
  }

  return (
    <div>
      <Navbar 
        {...args}
        color="primary"
      >
        <NavbarBrand href="/">RH - Console</NavbarBrand>
        <Nav>
          <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
              <DropdownMenu {...args} end>
                <DropdownItem>
                  <NavLink to="profile">
                    My account
                  </NavLink>
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Help</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default TopMenu