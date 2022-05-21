import { Container, Row } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/donkeylogo.png'
import LogoText from '@/assets/donkeylogotext.png'

import Dot from './Dot'
import { Button, ButtonHeading5, LinkHeading5 } from './styles'

const NavBar = () => {
  return (
    <Container fluid css={{ paddingTop: '40px' }}>
      <Row justify='space-between' align='center'>
        <Link href='/'>
          <Row align='center' css={{ cursor: 'pointer' }}>
            <Image src={Logo} alt='logo' />
            <Image src={LogoText} alt='logo-text' />
          </Row>
        </Link>
        <Row align='center'>
          <Link href='/about'>
            <LinkHeading5>About</LinkHeading5>
          </Link>
          <Dot />
          <LinkHeading5>Inspection Service</LinkHeading5>
          <Dot />
          <LinkHeading5>Service</LinkHeading5>
          <Dot />
          <LinkHeading5>Contact</LinkHeading5>
        </Row>
        <Button>
          <ButtonHeading5>Get Started</ButtonHeading5>
        </Button>
      </Row>
    </Container>
  )
}

export default NavBar
