import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@nextui-org/react'
import React from 'react'

import DividerIcon from '@/components/DividerIcon'

import AboutCard from './AboutCard'
import {
  ContentContainer,
  DividerContainer,
  GradientText,
  StyledHeading3
} from './styles'

const Content = () => {
  return (
    <ContentContainer>
      <DividerContainer>
        <DividerIcon icon={faQuestionCircle} />
      </DividerContainer>
      <StyledHeading3>
        Small <GradientText>eDonkey</GradientText> is dedicated to business
        services, its main business is: Direct Mail Business + Inspection
        Service
      </StyledHeading3>
      <Grid.Container justify='center' gap={2}>
        <Grid>
          <AboutCard
            title='Direct Mail Business'
            description='With a professional service team, rich overseas
marketing resources and advanced printing
technology, we provide customers with complete
direct mail marketing solutions.'
          />
        </Grid>
        <Grid>
          <AboutCard
            title='Inspection Service'
            description='A professional third-party testing company
can provide you with any customized and standardized quality control services. The company is headquartered in Shenzhen, with branches in more than ten cities including Ningbo, Shanghai, Beijing, Tianjin, Qingdao, etc., with more than 270 experienced professional testing personnel. We can meet all your inspections in different cities in China. We can take on bulk orders and arrange local inspectors, saving customers extra travel costs. In addition, we are not only capable of presenting the true quality of your products, but also capable of proposing effective solutions to quality problems.'
          />
        </Grid>
      </Grid.Container>
    </ContentContainer>
  )
}

export default Content
