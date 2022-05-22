import { styled, StyledButton } from '@nextui-org/react'

import { Heading5, Heading6 } from '../Typography/Headings'

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%'
})

export const LogoWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
})

export const Button = styled(StyledButton, {
  backgroundImage: 'linear-gradient(to right, $secondary, $primary) !important',
  borderRadius: '50px',
  '&:hover': {
    background: '$primary !important'
  }
})

export const ButtonHeading5 = styled(Heading5, {
  color: '#fff !important'
})

export const LinkHeading6 = styled(Heading6, {
  cursor: 'pointer',

  '&:hover': {
    color: '$primary !important'
  }
})
