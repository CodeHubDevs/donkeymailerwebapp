import {
  faEnvelope,
  faHouse,
  faMobileAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Paragraph } from '@/components/Typography/Paragraph'

import { IconWrapper, InfoContainer, ItemContainer } from './styles'

interface ContactInfoProps {
  icon: any
  description: string
}

const ContactInfoItem: React.FC<ContactInfoProps> = ({ icon, description }) => {
  return (
    <ItemContainer>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} />
      </IconWrapper>
      <Paragraph>{description}</Paragraph>
    </ItemContainer>
  )
}

const ContactInfo = () => {
  return (
    <InfoContainer>
      <ContactInfoItem
        icon={faHouse}
        description='2nd Floor, Huazhongfa Building, No. 90, Fuqian Road, Guanlan, Longhua District, Shenzhen'
      />
      <ContactInfoItem icon={faPhone} description='0755-23894921' />
      <ContactInfoItem icon={faMobileAlt} description='13428954268' />
      <ContactInfoItem icon={faEnvelope} description='13428954268@163.com' />
    </InfoContainer>
  )
}

export default ContactInfo
