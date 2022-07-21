import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

import { useAuth } from '@/context/AuthContext'

export const useProfile = () => {
  const auth = useAuth()

  const [profile, setProfile] = useState<any>()

  useEffect(() => {
    // eslint-disable-next-line
    if (auth.token) {
      const decoded = jwtDecode(auth.token)
      setProfile(decoded)
    }
  }, [auth.token])

  // eslint-disable-next-line
  const response = useSWR(`/api/user/${profile?.user_id}`)
  return response
}
