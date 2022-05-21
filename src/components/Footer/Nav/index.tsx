import Link from 'next/link'

import { StyledHeading5 } from './styles'

interface NavItemProps {
  href: string
  children: string
}

const Nav = () => {
  return (
    <div>
      <NavItem href='/service'>Service</NavItem>
      <NavItem href='/inspection'>Inspection Service</NavItem>
      <NavItem href='/about'>About</NavItem>
      <NavItem href='/contact'>Contact</NavItem>
    </div>
  )
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <StyledHeading5>{children}</StyledHeading5>
    </Link>
  )
}

export default Nav
