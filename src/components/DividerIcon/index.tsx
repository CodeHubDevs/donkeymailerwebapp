import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DividerContainer, HorizontalLine, IconContainer } from './styles'

const DividerIcon = ({ icon }: any) => {
  return (
    <DividerContainer>
      <HorizontalLine />
      <IconContainer>
        <FontAwesomeIcon icon={icon} fontSize={40} />
      </IconContainer>
    </DividerContainer>
  )
}

export default DividerIcon
