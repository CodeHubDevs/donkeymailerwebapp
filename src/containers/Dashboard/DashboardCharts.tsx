import React from 'react'

import FilterSelectMenu from '@/components/FilterSelectMenu'

const dateOptions = [
  { label: 'Last 7 days', value: 'last7days' },
  { label: 'Last 30 days', value: 'last30days' },
  { label: 'Last year', value: 'lastyear' }
]

const locationOptions = [
  { label: 'US', value: 'us' },
  { label: 'CA', value: 'ca' },
  { label: 'UK', value: 'uk' }
]

const SentChart = () => {
  const [selectedDate, setSelectedDate] = React.useState(dateOptions[0])
  const [selectedLocation, setSelectedLocation] = React.useState(
    locationOptions[0]
  )
  return (
    <div className='flex flex-col rounded-xl bg-white p-4 shadow-md'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-bold text-secondary'>Sent</h3>
        <div className='flex items-center gap-2'>
          <FilterSelectMenu
            options={dateOptions}
            value={selectedDate}
            onChange={setSelectedDate}
          />
          <FilterSelectMenu
            options={locationOptions}
            value={selectedLocation}
            onChange={setSelectedLocation}
          />
        </div>
      </div>
      {/* CHART */}
    </div>
  )
}

const SpendChart = () => {
  const [selectedDate, setSelectedDate] = React.useState(dateOptions[0])
  const [selectedLocation, setSelectedLocation] = React.useState(
    locationOptions[0]
  )
  return (
    <div className='flex flex-grow flex-col rounded-xl bg-white p-4 shadow-md'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-bold text-secondary'>Spend</h3>
        <div className='flex items-center gap-2'>
          <FilterSelectMenu
            options={dateOptions}
            value={selectedDate}
            onChange={setSelectedDate}
          />
          <FilterSelectMenu
            options={locationOptions}
            value={selectedLocation}
            onChange={setSelectedLocation}
          />
        </div>
      </div>
      {/* CHART */}
    </div>
  )
}

const DashboardCharts = () => {
  return (
    <section className='mt-16'>
      <h2 className='text-2xl font-bold'>Tracking</h2>
      <div className='flex gap-4'>
        <SentChart />
        <SpendChart />
      </div>
    </section>
  )
}

export default DashboardCharts
