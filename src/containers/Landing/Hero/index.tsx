import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Grid, Row } from '@nextui-org/react'

import MailBox from '@/assets/images/mailbox.png'
import OpenMail from '@/assets/images/openmail.png'
import Tickets from '@/assets/images/tickets.png'
import { Heading1 } from '@/components/Typography/Headings'

import HeroCard from './HeroCard'
import { ButtonArrow, ButtonHeading6, HeroButton } from './styles'

const Hero = () => {
  return (
    <Container as='section' fluid css={{ padding: '0 100px' }}>
      <Row align='center'>
        <Col>
          <Heading1 css={{ width: '756px' }}>
            Online Order, Efficient Printing, and Fast Delivery
          </Heading1>
          <HeroButton>
            <Row align='center' justify='space-between'>
              <ButtonHeading6>Start Now</ButtonHeading6>
              <ButtonArrow>
                <FontAwesomeIcon icon={faArrowRight} fontSize={32} />
              </ButtonArrow>
            </Row>
          </HeroButton>
        </Col>
        <Grid.Container gap={2} justify='center'>
          <Grid>
            <HeroCard
              title='Affordable'
              image={Tickets}
              paragraph='US postcards as low as $5/piece'
            />
          </Grid>
          <Grid xs={6}>
            <HeroCard
              title='Efficient Postage'
              image={MailBox}
              paragraph='Average US deliver time of 3-5 business days from order creation'
            />
          </Grid>
          <Grid xs={10.5}>
            <HeroCard
              title='One Start, Flexible and Convenient'
              image={OpenMail}
              paragraph='Directly connected to the production end equipment of the
local printing factory in the United States, and the whole process is automated.
Whether it is sending one sheet or 100,000 sheets, automatic production
and efficient mailing can be realized.'
            />
          </Grid>
        </Grid.Container>
      </Row>
    </Container>
  )
}

export default Hero
