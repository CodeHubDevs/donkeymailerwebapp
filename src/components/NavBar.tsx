import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import Logo from '@/assets/logo/donkeylogo.png'
import LogoText from '@/assets/logo/donkeylogotext.png'

interface NavItemProps {
  href: string
  children: React.ReactNode
}

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-8 px-32'>
      <Link href='/'>
        <div className='flex cursor-pointer items-center'>
          <Image src={Logo} alt='logo' />
          <Image src={LogoText} alt='logo-text' />
        </div>
      </Link>
      <div className='flex items-center gap-2'>
        <NavItem href='/about'>About</NavItem>
        <Dot />
        <NavItem href='/inspection'>Inspection Service</NavItem>
        <Dot />
        <NavItem href='/service'>Service</NavItem>
        <Dot />
        <NavItem href='/contact'>Contact</NavItem>
      </div>
      <Link href='/signin'>
        <a className='rounded-full bg-gradient-to-r from-secondary to-primary px-8 py-2 text-lg font-semibold text-white'>
          Get Started
        </a>
      </Link>
    </nav>
  )
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const router = useRouter()

  const isActiveLink = router.pathname === href

  return (
    <Link href={href}>
      <h5
        className={`cursor-pointer text-lg font-bold hover:text-primary ${
          isActiveLink ? 'text-primary' : ''
        }`}>
        {children}
      </h5>
    </Link>
  )
}

const Dot = () => {
  return <div className='text-lg font-bold'>&#xb7;</div>
}

export default NavBar
