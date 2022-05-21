import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { Col } from '@nextui-org/react'

import DividerIcon from '@/components/DividerIcon'

import { MainContainer, MainHeading } from './styles'
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
      </MainContainer>
    </>
  )
}

export default Main
