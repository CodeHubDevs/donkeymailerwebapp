import { styled } from '@nextui-org/react'

import { Heading5 } from '@/components/Typography/Headings'
import { Paragraph } from '@/components/Typography/Paragraph'

export const SubCardContainer = styled('div', {
  borderRadius: '20px',
  boxShadow: '$md',
  backgroundColor: '$secondary10',
  width: '450px',
  height: '100%'
})

export const SubCardTitle = styled('div', {
  backgroundColor: '$white',
  borderRadius: '20px 20px 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px'
})

export const StyledHeading5 = styled(Heading5, {
  color: '$primary !important'
})

export const SubCardContent = styled('div', {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const StyledParagraph = styled(Paragraph, {
  textAlign: 'center',
  paddingTop: '32px'
})

export const ImageWrapper = styled('div', {
  marginTop: '40px'
})
