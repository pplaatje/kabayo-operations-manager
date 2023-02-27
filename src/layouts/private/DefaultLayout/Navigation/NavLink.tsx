
import { NavLink as RSNavLink } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
  to: string
}

const NavLink = ({children, to}: IProps) => {
  return (
    <RSNavLink className="navLink" to={to}>{children}</RSNavLink>
  )
}

export default NavLink