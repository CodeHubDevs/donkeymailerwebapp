import {
  faAngleRight,
  faAngleLeft,
  faChartLine,
  faEnvelopesBulk,
  faWindowMaximize
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import Logo from '@/assets/logo/donkeylogo.png'
import LogoText from '@/assets/logo/donkeylogotext.png'

const links = [
  {
    name: 'Dashboard',
    href: '/app/dashboard',
    icon: faChartLine
  },
  {
    name: 'Campaign',
    href: '/app/campaign',
    icon: faEnvelopesBulk
  },
  {
    name: 'Template',
    href: '/app/template',
    icon: faWindowMaximize
  }
]

const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const { pathname } = useRouter()
  return (
    <div
      className={`fixed z-10 h-screen bg-white pt-8 shadow-2xl ${
        isOpen ? 'w-72' : 'w-24'
      }`}>
      <FontAwesomeIcon
        icon={isOpen ? faAngleLeft : faAngleRight}
        onClick={() => setIsOpen(!isOpen)}
        className='absolute -right-3 top-9 h-4 w-4 cursor-pointer rounded-full bg-primary p-1 text-white'
      />
      <div className='flex items-center gap-x-4 pl-3'>
        <div className='w-16'>
          <Image src={Logo} alt='logo' layout='responsive' objectFit='cover' />
        </div>
        <div className={`w-32 ${!isOpen ? 'hidden' : ''}`}>
          <Image
            src={LogoText}
            alt='logo'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
      <ul className='mt-6'>
        {links.map(({ name, href, icon }) => (
          <li key={name} className='mb-2'>
            <Link href={href}>
              <a className='relative flex items-center py-2 pl-8 hover:bg-gray-100'>
                {pathname === href && (
                  <div className='absolute left-0 h-full w-[6px] rounded-full bg-primary' />
                )}
                <FontAwesomeIcon
                  icon={icon}
                  className='mr-4 w-8 text-3xl text-secondary'
                />
                <span
                  className={`text-lg font-bold text-black50 ${
                    !isOpen ? 'hidden' : ''
                  }`}>
                  {name}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
