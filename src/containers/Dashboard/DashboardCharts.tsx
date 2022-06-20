import React from 'react'
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import SelectMenu from '@/components/SelectMenu'

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

const pieData = [
  { name: 'Sent Mail', value: 131, color: '#58BDF6' },
  { name: 'Pending Mail', value: 32, color: '#45CEDE' }
]

const lineData = [
  { name: 'March 03', system: 72.32, wechat: 24.32, alipay: 54.32 },
  { name: 'March 04', system: 32.32, wechat: 12.32, alipay: 43.32 },
  { name: 'March 05', system: 48.32, wechat: 15.32, alipay: 87.32 }
]

const totalLineData = lineData.map((item) => {
  const total =
    Math.round((item.system + item.wechat + item.alipay) * 100) / 100
  return {
    ...item,
    total
  }
})

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
          <SelectMenu
            options={dateOptions}
            value={selectedDate}
            onChange={setSelectedDate}
          />
          <SelectMenu
            options={locationOptions}
            value={selectedLocation}
            onChange={setSelectedLocation}
          />
        </div>
      </div>
      <div className='my-2'>
        <ResponsiveContainer width={400} height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey='value'
              outerRadius={100}
              innerRadius={60}
              label>
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={`${pieData[index].color}`} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
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
          <SelectMenu
            options={dateOptions}
            value={selectedDate}
            onChange={setSelectedDate}
          />
          <SelectMenu
            options={locationOptions}
            value={selectedLocation}
            onChange={setSelectedLocation}
          />
        </div>
      </div>
      <div className='my-4'>
        <ResponsiveContainer height={300} width='100%'>
          <LineChart data={totalLineData}>
            {/* TODO Create custom data set with value for mapping */}
            <Line
              type='monotone'
              dataKey='total'
              stroke='#58BDF6'
              strokeWidth={1}
            />
            <Line
              type='monotone'
              dataKey='system'
              stroke='#45CEDE'
              strokeWidth={1}
            />
            <Line
              type='monotone'
              dataKey='wechat'
              stroke='#2CC000'
              strokeWidth={1}
            />
            <Line
              type='monotone'
              dataKey='alipay'
              stroke='#FFBF1A'
              strokeWidth={1}
            />
            <Tooltip />
            <Legend verticalAlign='top' />
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const DashboardCharts = () => {
  return (
    <section className='mt-10'>
      <h2 className='mb-2 text-2xl font-bold'>Tracking</h2>
      <div className='flex gap-4'>
        <SentChart />
        <SpendChart />
      </div>
    </section>
  )
}

export default DashboardCharts
