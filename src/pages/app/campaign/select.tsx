import React, { useState } from 'react'

import CampaignPostCard from '@/assets/images/campaign-card.png'
import CampaignImage from '@/assets/images/campaign.png'
// import CampaignEnvelope from '@/assets/images/envelope-card.png'
import AppNavBar from '@/components/AppNavBar'
import FormSelect from '@/components/FormSelect'
import PrivateLayout from '@/components/layout/PrivateLayout'
import SelectCard from '@/containers/Campaigns/SelectCard'
import SelectHeader from '@/containers/Campaigns/SelectHeader'

const locationOptions = [{ label: 'UK', value: 'uk' }]

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
          title={'A5 Postcard'}
          query={{ destination: selectedLocation.value, type: 'A5' }}
        />
        <SelectCard
          image={CampaignPostCard}
          title={'A6 Postcard'}
          query={{ destination: selectedLocation.value, type: 'A6' }}
        />
        <SelectCard
          image={CampaignPostCard}
          title={'A5 Envelope Postcard'}
          query={{ destination: selectedLocation.value, type: 'A5-ENV' }}
        />
      </div>
    </PrivateLayout>
  )
}

export default CampaignSelect
