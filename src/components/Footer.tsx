import {
  faEnvelope,
  faHome,
  faMobileAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '@/assets/logo/donkeylogo.png'
import LogoText from '@/assets/logo/donkeylogotext.png'

interface ContactInfoProps {
  icon: any
  description: string
}

interface NavItemProps {
  href: string
  children: React.ReactNode
}

const Footer = () => {
  return (
    <div className='py-24'>
      <div className='mb-16 flex items-center justify-center'>
        <Image src={Logo} alt='logo' />
        <Image src={LogoText} alt='logo-text' />
      </div>
      <div className='flex justify-evenly'>
        <div className='flex w-[300px] flex-col gap-4'>
          <ContactInfo
            icon={faHome}
            description='2nd Floor, Huazhongfa Building, No. 90, Fuqian Road, Guanlan, Longhua District, Shenzhen'
          />
          <ContactInfo icon={faPhone} description='0755-23894921' />
          <ContactInfo icon={faMobileAlt} description='13428954268' />
          <ContactInfo icon={faEnvelope} description='13428954268@163.com' />
        </div>
        <div className='flex flex-col gap-4'>
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/inspection'>Inspection Service</NavItem>
          <NavItem href='/service'>Service</NavItem>
          <NavItem href='/contact'>Contact</NavItem>
        </div>
        <h1 className='text-5xl font-bold'>QR</h1>
      </div>
    </div>
  )
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, description }) => {
  return (
    <div className='flex'>
      <div className='mr-2 text-primary'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className='text-black50'>{description}</p>
    </div>
  )
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <h5 className='cursor-pointer text-xl font-bold hover:text-primary'>
        {children}
      </h5>
    </Link>
  )
}

export default Footer
