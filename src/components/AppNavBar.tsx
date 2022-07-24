import {
  faGear,
  faWallet,
  faRightFromBracket,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import React, { useCallback } from 'react'

import { useProfile } from '@/api'
import { useAuth } from '@/context/AuthContext'

interface AppNavBarProps {
  pageName: string
}

const menuItems = [
  {
    name: 'My Settings',
    href: '/app/user-settings',
    icon: faGear
  },
  {
    name: 'Billing Settings',
    href: '/app/billing-settings',
    icon: faWallet
  }
]

const AppNavBar: React.FC<AppNavBarProps> = ({ pageName }) => {
  const auth = useAuth()

  const { data: profile } = useProfile()

  const onSignOut = useCallback(() => {
    auth.signOut()
  }, [auth])
  return (
    <div className='flex w-full items-center justify-between'>
      <h1 className='text-2xl font-bold text-primary'>{pageName}</h1>
      <div className='flex items-center gap-x-4'>
        <div className='flex items-center gap-x-4 rounded-2xl border-2 border-primary py-2 px-4'>
          <span className='text-xl font-bold text-primary'>$43.18</span>
          <button className='rounded-full bg-green-400 py-1 px-2 text-xs font-bold text-white hover:bg-green-500'>
            Top-Up Balance
          </button>
        </div>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-bold hover:bg-gray-200'>
              <h2 className='flex'>
                {profile?.first_name && profile.last_name
                  ? `Welcome ${profile.first_name} ${profile.last_name}`
                  : 'Welcome User'}
              </h2>
              <FontAwesomeIcon icon={faChevronDown} className='text-sm' />
            </Menu.Button>
          </div>
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1'>
              {menuItems.map(({ name, href, icon }) => (
                <Menu.Item key={name}>
                  <Link href={href}>
                    <a className='flex w-full items-center gap-x-2 rounded-md px-2 py-2 text-black50 hover:bg-primary hover:text-white'>
                      <FontAwesomeIcon icon={icon} />
                      <span className='text-sm font-bold'>{name}</span>
                    </a>
                  </Link>
                </Menu.Item>
              ))}
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                <button
                  onClick={onSignOut}
                  className='flex w-full items-center gap-x-2 rounded-md px-2 py-2 text-black50 hover:bg-primary hover:text-white'>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <span className='text-sm font-bold'>Logout</span>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  )
}

export default AppNavBar
