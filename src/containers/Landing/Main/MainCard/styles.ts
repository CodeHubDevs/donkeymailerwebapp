import { styled } from '@nextui-org/react'

import { Heading5 } from '@/components/Typography/Headings'
import { Paragraph } from '@/components/Typography/Paragraph'

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  padding: '$10',
  boxShadow: '$md',
  borderRadius: '20px',
  width: '600px',
  position: 'relative',
  zIndex: '1'
})

export const ImageWrapper = styled('div', {
  position: 'absolute',
  top: '-100px',
  zIndex: '2'
})

export const Content = styled('div', {
  marginTop: '48px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ContentHeader = styled(Heading5, {
  color: '$primary !important'
})

export const ContentParagraph = styled(Paragraph, {
  textAlign: 'center'
})
