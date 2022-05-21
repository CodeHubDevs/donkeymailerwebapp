import { Container, Row } from '@nextui-org/react'
import Image from 'next/image'

import Logo from '@/assets/logo/donkeylogo.png'
import LogoText from '@/assets/logo/donkeylogotext.png'

import { Heading1 } from '../Typography/Headings'

import ContactInfo from './ContactInfo'
import Nav from './Nav'

const QR = () => {
  return <Heading1>QR</Heading1>
}

const Footer = () => {
  return (
    <Container fluid css={{ padding: '64px 200px' }}>
      <Row align='center' justify='center'>
        <Image src={Logo} alt='logo' />
        <Image src={LogoText} alt='logo' />
      </Row>
      <Row
        justify='space-between'
        align='flex-start'
        css={{ marginTop: '64px' }}>
        <ContactInfo />
        <Nav />
        <QR />
      </Row>
    </Container>
  )
}

export default Footer
