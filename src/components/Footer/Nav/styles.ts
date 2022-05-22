import { styled } from '@nextui-org/react'

import { Heading6 } from '@/components/Typography/Headings'

export const StyledHeading6 = styled(Heading6, {
  cursor: 'pointer',
  marginBottom: '32px !important',

  '&:hover': {
    color: '$primary !important'
  }
})
