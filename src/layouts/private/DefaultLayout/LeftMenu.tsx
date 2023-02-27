import { Nav } from "reactstrap"

import NavItem from './Navigation/NavItem'
import NavLink from './Navigation/NavLink'

const LeftMenu = (args: any) => {
  
  return (
      <Nav
        {...args}
        color="primary"
        vertical
      >
        <NavItem>
          <NavLink to="events"><i className="bi bi-calendar-event"></i> Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="entities"><i className="bi bi-film"></i>Paarden &amp; Ruiters</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="events"><i className="bi bi-person-vcard"></i>Subscribers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="templates"><i className="bi bi-building"></i>Templates</NavLink>
          <Nav>
            <NavItem>
              <NavLink to="templates/components/cards"><i className="bi bi-card-text"></i>Cards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="templates/components/cards"><i className="bi bi-layout-text-sidebar-reverse"></i>Rows</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="templates/components/cards"><i className="bi bi-columns"></i>Pages</NavLink>
            </NavItem>
          </Nav>
        </NavItem>
        <NavItem>
          <NavLink to="profile"><i className="bi bi-person-circle"></i>Profile</NavLink>
        </NavItem>
      </Nav>

  );
}

export default LeftMenu