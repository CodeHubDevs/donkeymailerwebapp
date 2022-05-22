import { styled, StyledCard } from '@nextui-org/react'

import { Heading5 } from '@/components/Typography/Headings'
import { Paragraph } from '@/components/Typography/Paragraph'

export const CardContainer = styled(StyledCard, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '700px',
  padding: '16px 64px'
})

export const CardTitle = styled(Heading5, {
  color: '$primary !important'
})

export const CardDescription = styled(Paragraph, {
  marginTop: '64px !important',
  textAlign: 'center'
})
