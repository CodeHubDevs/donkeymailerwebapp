import React from 'react'

import CampaignPostCard from '@/assets/images/campaign-card.png'
import CampaignImage from '@/assets/images/campaign.png'
import CampaignEnvelope from '@/assets/images/envelope-card.png'
import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import CampaignCard from '@/containers/Campaign/CampaignCard'
import CampaignHeader from '@/containers/Campaign/CampaignHeader'

const Campaign = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Campaign' />
      <CampaignHeader image={CampaignImage}></CampaignHeader>
      <div className='gap-18 mt-12 grid grid-cols-2'>
        <CampaignCard
          image={CampaignPostCard}
          title={'4 x 6 POSTCARD'}
          description={'(4 inches to 6 inches)'}
          detailOne={'• 14 pt Gloss Paper Stock'}
          detailTwo={'• Full Color Double Sided'}></CampaignCard>
        <CampaignCard
          image={CampaignPostCard}
          title={'6 x 9 POSTCARD'}
          description={'(6 inches to 9 inches)'}
          detailOne={'• 70# Paper Stock'}
          detailTwo={'• #10 Window Envelope'}></CampaignCard>
      </div>
      <div className='gap-18 mt-12 grid grid-cols-2'>
        <CampaignCard
          image={CampaignPostCard}
          title={'6 x 11 POSTCARD'}
          description={'(6 inches to 11 inches)'}
          detailOne={'• 14pt Gloss Paper Stock'}
          detailTwo={'• Full Color Double Sided'}></CampaignCard>
        <CampaignCard
          image={CampaignEnvelope}
          title={'8.5 x 11 LETTER'}
          description={'(8.5 inches to 11 inches)'}
          detailOne={'• 70# Paper Stock'}
          detailTwo={
            '• Large Window Envelope to Show Logo and Sender Address'
          }></CampaignCard>
      </div>
    </PrivateLayout>
  )
}

export default Campaign
