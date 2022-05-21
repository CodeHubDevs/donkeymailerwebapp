import { styled } from '@nextui-org/react'

export const IconContainer = styled('div', {
  position: 'absolute',
  width: '100px',
  height: '100px',
  backgroundColor: '$secondary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  borderRadius: '50%'
})

export const HorizontalLine = styled('div', {
  width: '100%',
  height: '2px',
  backgroundColor: '$black10'
})

export const DividerContainer = styled('div', {
  position: 'relative',
  height: '110px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
