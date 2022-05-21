import { styled, StyledButton } from '@nextui-org/react'

import { Heading5 } from '../Typography/Headings'

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

export const LinkHeading5 = styled(Heading5, {
  cursor: 'pointer',

  '&:hover': {
    color: '$primary !important'
  }
})
