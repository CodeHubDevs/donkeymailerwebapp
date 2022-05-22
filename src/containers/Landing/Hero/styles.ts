import { StyledButton, styled } from '@nextui-org/react'

import { Heading6 } from '@/components/Typography/Headings'

export const HeroButton = styled(StyledButton, {
  display: 'block',
  marginTop: '64px',
  padding: '0 12px !important',
  borderRadius: '50px',
  height: '300px',
  '&:hover': {
    backgroundColor: '$primary50'
  }
})

export const ButtonHeading6 = styled(Heading6, {
  color: '$white !important',
  paddingLeft: '8px'
})

export const ButtonArrow = styled('div', {
  backgroundColor: '#fff',
  color: '$primary',
  borderRadius: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '110px'
})
