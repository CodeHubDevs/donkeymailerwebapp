import { CardContainer, CardDescription, CardTitle } from './styles'

interface AboutCardProps {
  title: string
  description: string
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  )
}

export default AboutCard
