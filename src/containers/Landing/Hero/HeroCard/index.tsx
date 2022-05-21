import Image from 'next/image'

import { CardParagraph, CardTitle, StyledCard } from './styles'

interface HeroCardProps {
  title: string
  image: any
  paragraph: string
}

const HeroCard: React.FC<HeroCardProps> = ({ title, image, paragraph }) => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <Image src={image} alt='image' />
      <CardParagraph>{paragraph}</CardParagraph>
    </StyledCard>
  )
}

export default HeroCard
