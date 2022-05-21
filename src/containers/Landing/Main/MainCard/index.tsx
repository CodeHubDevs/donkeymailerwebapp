import Image from 'next/image'

import {
  CardContainer,
  Content,
  ContentHeader,
  ContentParagraph,
  ImageWrapper
} from './styles'

interface MainCardProps {
  image: any
  title: string
  description: string
}

const MainCard: React.FC<MainCardProps> = ({ image, title, description }) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={image} alt='image' />
      </ImageWrapper>
      <Content>
        <ContentHeader>{title}</ContentHeader>
        <ContentParagraph>{description}</ContentParagraph>
      </Content>
    </CardContainer>
  )
}

export default MainCard
