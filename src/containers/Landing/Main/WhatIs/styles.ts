import { styled } from '@nextui-org/react'

import { Heading3, Heading4 } from '@/components/Typography/Headings'

export const WhatIsContainer = styled('div', {
  backgroundColor: '$secondary10 !important',
  margin: '128px 200px',
  padding: '8px',
  borderRadius: '20px',
  position: 'relative'
})

export const Header = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  top: '-50px',
  left: '-50px'
})

export const StyledHeading3 = styled(Heading3, {
  display: 'inline-flex',
  textGradient: '45deg, $secondary, $primary',
  fontWeight: 'bolder',
  lineHeight: '2'
})

export const StyledHeading4 = styled(Heading4, {
  color: '$black50 !important',
  textAlign: 'center'
})
