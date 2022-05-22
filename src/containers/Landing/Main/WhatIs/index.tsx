import Image from 'next/image'

import Logo from '@/assets/logo/donkeylogo.png'
import { Heading3 } from '@/components/Typography/Headings'

import {
  Header,
  StyledHeading3,
  StyledHeading4,
  WhatIsContainer
} from './styles'

const WhatIs = () => {
  return (
    <WhatIsContainer>
      <Header>
        <Image src={Logo} alt='logo' />
        <Heading3>
          What is {<StyledHeading3>DonkeyMailer</StyledHeading3>}?
        </Heading3>
      </Header>
      <StyledHeading4>
        Direct Mail automation tool supporting US, multi-format letters and
        postcards.
      </StyledHeading4>
    </WhatIsContainer>
  )
}

export default WhatIs
