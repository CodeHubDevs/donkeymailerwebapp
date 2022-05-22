import { Card, styled } from '@nextui-org/react'

import { Heading5 } from '@/components/Typography/Headings'
import { Paragraph } from '@/components/Typography/Paragraph'

export const StyledCard = styled(Card, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  padding: '$10'
})

export const CardTitle = styled(Heading5, {
  color: '$primary !important'
})

export const CardParagraph = styled(Paragraph, {
  textAlign: 'center'
})
