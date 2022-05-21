import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Grid } from '@nextui-org/react'

import Browser from '@/assets/images/browser.png'
import Cycle from '@/assets/images/cycle.png'
import Files from '@/assets/images/files.png'
import Globe from '@/assets/images/globe.png'
import Monitor from '@/assets/images/monitor.png'
import Divider from '@/components/Divider'
import DividerIcon from '@/components/DividerIcon'

import MainCard from './MainCard'
import { MainContainer, MainHeading } from './styles'
import SubCard from './SubCard'
import WhatIs from './WhatIs'

const Main = () => {
  return (
    <>
      <MainContainer>
        <Col css={{ padding: '100px 200px' }}>
          <DividerIcon icon={faMessage} />
          <MainHeading>
            The preferred method of communication for overseas consumers Mailing
            Postcards and Letters that can help you get closer to U.S. consumers
            quickly
          </MainHeading>
        </Col>
        <Col>
          <WhatIs />
        </Col>
        <Grid.Container gap={2} justify='center'>
          <Grid>
            <MainCard
              image={Globe}
              title='US Direct Mail'
              description='Currently covering the entire US'
            />
          </Grid>
          <Grid>
            <MainCard
              image={Files}
              title='Variuos Product Specifications'
              description='There are 12 specifications for postcards and letters.
Better adapt to marketing needs and bring higher
conversion rate and ROI.'
            />
          </Grid>
        </Grid.Container>
        <Container css={{ padding: '0 200px' }}>
          <Divider />
        </Container>
        <Grid.Container gap={2} justify='center'>
          <Grid>
            <SubCard
              title='Status Update'
              description='The status from order placement, production to delivery can be updated in real time, and the progress of the order can be followed up.'
              image={Monitor}
            />
          </Grid>
          <Grid>
            <SubCard
              title='Status Update'
              description='According to the requirements of the enterprise, dozens of sub-accounts can be set up to facilitate management. The financial data is clear and the accounting is accurate.'
              image={Browser}
            />
          </Grid>
          <Grid>
            <SubCard
              title='Status Update'
              description='We support API docking at the system level. Meet the use of internal management tools in large enterprises.'
              image={Cycle}
            />
          </Grid>
        </Grid.Container>
      </MainContainer>
    </>
  )
}

export default Main
