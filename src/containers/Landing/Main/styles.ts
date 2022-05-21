import { Container, styled } from '@nextui-org/react'

import { Heading3 } from '@/components/Typography/Headings'

export const MainContainer = styled(Container, {
  backgroundColor: '$white !important'
})

export const MainHeading = styled(Heading3, {
  color: '$secondary !important',
  fontWeight: '$light',
  textAlign: 'center',
  paddingTop: '96px'
})
