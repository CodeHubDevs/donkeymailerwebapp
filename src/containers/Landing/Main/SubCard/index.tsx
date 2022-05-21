import Image from 'next/image'

import {
  ImageWrapper,
  StyledHeading5,
  StyledParagraph,
  SubCardContainer,
  SubCardContent,
  SubCardTitle
} from './styles'

interface SubCardProps {
  title: string
  description: string
  image: any
}

const SubCard: React.FC<SubCardProps> = ({ title, description, image }) => {
  return (
    <SubCardContainer>
      <SubCardTitle>
        <StyledHeading5>{title}</StyledHeading5>
      </SubCardTitle>
      <SubCardContent>
        <StyledParagraph>{description}</StyledParagraph>
        <ImageWrapper>
          <Image src={image} alt='image' />
        </ImageWrapper>
      </SubCardContent>
    </SubCardContainer>
  )
}

export default SubCard
