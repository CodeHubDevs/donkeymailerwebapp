import React, { useState } from 'react'

import CampaignPostCard from '@/assets/images/campaign-card.png'
import CampaignImage from '@/assets/images/campaign.png'
import CampaignEnvelope from '@/assets/images/envelope-card.png'
import AppNavBar from '@/components/AppNavBar'
import FormSelect from '@/components/FormSelect'
import PrivateLayout from '@/components/layout/PrivateLayout'
import SelectCard from '@/containers/Campaigns/SelectCard'
import SelectHeader from '@/containers/Campaigns/SelectHeader'

const locationOptions = [
  { label: 'USA', value: 'usa' },
  { label: 'CA', value: 'ca' },
  { label: 'UK', value: 'uk' }
]

const CampaignSelect = () => {
  const [selectedLocation, setSelectedLocation] = useState(locationOptions[0])

  return (
    <PrivateLayout title='Campaign Select'>
      <AppNavBar pageName='Campaign' />
      <SelectHeader image={CampaignImage} />
      <div className='mx-16 mt-10 flex items-center justify-end'>
        <FormSelect
          className='w-32'
          options={locationOptions}
          value={selectedLocation}
          onChange={setSelectedLocation}
        />
      </div>
      <div className='mx-16 mt-8 grid grid-cols-2 gap-8'>
        <SelectCard
          image={CampaignPostCard}
          title={'4 x 6 POSTCARD'}
          description={'(4 inches to 6 inches)'}
          detailOne={'• 14 pt Gloss Paper Stock'}
          detailTwo={'• Full Color Double Sided'}
          query={{ destination: selectedLocation.value, type: '4x6 postcard' }}
        />
        <SelectCard
          image={CampaignPostCard}
          title={'6 x 9 POSTCARD'}
          description={'(6 inches to 9 inches)'}
          detailOne={'• 70# Paper Stock'}
          detailTwo={'• #10 Window Envelope'}
          query={{ destination: selectedLocation.value, type: '6x9 postcard' }}
        />
        <SelectCard
          image={CampaignPostCard}
          title={'6 x 11 POSTCARD'}
          description={'(6 inches to 11 inches)'}
          detailOne={'• 14pt Gloss Paper Stock'}
          detailTwo={'• Full Color Double Sided'}
          query={{ destination: selectedLocation.value, type: '6x11 postcard' }}
        />
        <SelectCard
          image={CampaignEnvelope}
          title={'8.5 x 11 LETTER'}
          description={'(8.5 inches to 11 inches)'}
          detailOne={'• 70# Paper Stock'}
          detailTwo={'• Large Window Envelope to Show Logo and Sender Address'}
          query={{ destination: selectedLocation.value, type: '8.5x11 letter' }}
        />
      </div>
    </PrivateLayout>
  )
}

export default CampaignSelect
