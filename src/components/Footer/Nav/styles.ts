import { styled } from '@nextui-org/react'

import { Heading5 } from '@/components/Typography/Headings'

export const StyledHeading5 = styled(Heading5, {
  cursor: 'pointer',
  marginBottom: '32px !important',

  '&:hover': {
    color: '$primary !important'
  }
})
