import { Container, Row } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo/donkeylogo.png'
import LogoText from '@/assets/logo/donkeylogotext.png'

import Dot from './Dot'
import {
  Button,
  ButtonHeading5,
  LinkHeading5,
  LogoContainer,
  LogoWrapper
} from './styles'

interface NavItemProps {
  href: string
  children: string
}

const NavBar = () => {
  return (
    <Container fluid css={{ padding: '40px 140px' }}>
      <Row justify='space-between' align='center'>
        <LogoContainer>
          <Link href='/'>
            <LogoWrapper>
              <Image src={Logo} alt='logo' />
              <Image src={LogoText} alt='logo-text' />
            </LogoWrapper>
          </Link>
        </LogoContainer>
        <Row align='center'>
          <NavItem href='/about'>About</NavItem>
          <Dot />
          <NavItem href='/inspection'>Inspection Service</NavItem>
          <Dot />
          <NavItem href='/service'>Service</NavItem>
          <Dot />
          <NavItem href='/contact'>Contact</NavItem>
        </Row>
        <Button>
          <ButtonHeading5>Get Started</ButtonHeading5>
        </Button>
      </Row>
    </Container>
  )
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <LinkHeading5>{children}</LinkHeading5>
    </Link>
  )
}

export default NavBar