import { NavItem as RSNavItem } from "reactstrap"

interface IProps {
  children: React.ReactNode;
}

const NavItem = ({children}: IProps) => {
  return (
    <RSNavItem className="navItem">{children}</RSNavItem>
  )
}

export default NavItem