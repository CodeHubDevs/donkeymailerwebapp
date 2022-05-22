import { Container, styled } from '@nextui-org/react'

import { Heading3 } from '@/components/Typography/Headings'

export const ContentContainer = styled(Container, {
  backgroundColor: '$white',
  paddingBottom: '64px '
})

export const DividerContainer = styled('div', {
  padding: '104px 200px'
})

export const StyledHeading3 = styled(Heading3, {
  textAlign: 'center',
  width: '80%',
  marginBottom: '48px !important'
})

export const GradientText = styled('span', {
  fontWeight: 'bolder',
  lineHeight: '2',
  paddingRight: '4px',
  textGradient: '45deg, $secondary, $primary'
})
