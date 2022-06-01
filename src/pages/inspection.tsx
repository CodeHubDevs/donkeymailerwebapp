import Link from 'next/link'
import React from 'react'

import Hour from '@/assets/images/24hr.png'
import CheckList from '@/assets/images/checklist.png'
import Discount from '@/assets/images/discount.png'
import Factory from '@/assets/images/factory.png'
import InspectionSearch from '@/assets/images/inspection.png'
import InspectionFile from '@/assets/images/inspectionfile.png'
import Tie from '@/assets/images/tie.png'
import DividerText from '@/components/DividerText'
import InspectionCard from '@/containers/Inspection/InspectionCard'
import TextCard from '@/containers/Inspection/TextCard'

const Inspection = () => {
  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center gap-4 bg-white pt-32 pb-64'>
        <h1 className='text-5xl font-bold'>
          <span className='text-primary'>TCO</span> Professional Third-Party
          Testing Company
        </h1>
        <p className='text-lg text-black50'>
          Factory Inspection, Mid-term Inspection, Final Inspection, Monitoring
        </p>
        <Link href='http://www.tcochina.com'>
          <a
            className='rounded-full bg-primary px-16 py-2 text-white'
            target='_blank'>
            Visit TCO
          </a>
        </Link>
      </div>
      <div className='-mt-40'>
        <div className='grid grid-cols-3 gap-32 px-72'>
          <InspectionCard label='24-hour Report' image={Hour} />
          <InspectionCard label='Discount Price' image={Discount} />
          <InspectionCard label='Professional Service' image={Tie} />
        </div>
      </div>
      <div className='mx-64'>
        <div className='mx-32 mt-24'>
          <DividerText>
            <div className='flex w-full flex-col items-center justify-center text-2xl font-bold text-primary'>
              <h5>Why Choose Us?</h5>
              <h5>Why Choose TCO?</h5>
            </div>
          </DividerText>
        </div>
        <div className='grid grid-cols-2 gap-4 py-8'>
          <TextCard label='Professional Service' />
          <TextCard label='High Efficiency' />
          <TextCard label='Integrity' />
          <TextCard label='Can find problems in time and solve the problem at the same time, we will give our suggestions in the report' />
        </div>
      </div>
      <div className='mx-64'>
        <div className='mx-32 mt-24'>
          <DividerText>
            <h5 className='flex w-1/2 items-center justify-center text-2xl font-bold text-primary'>
              Our Service
            </h5>
          </DividerText>
        </div>
        <h3 className='mx-64 my-8 text-center text-2xl text-black50'>
          According to customer needs, the professional team provides customized
          inspection schemes and services to escort your supply chain quality
          control
        </h3>
        <div className='my-16 grid grid-cols-2 gap-16 px-64'>
          <InspectionCard
            label='Factory Inspection'
            isReverse
            image={Factory}
          />
          <InspectionCard
            label='Initial Inspection'
            isReverse
            image={InspectionSearch}
          />
        </div>
        <div className='grid grid-cols-3 gap-16 px-32'>
          <InspectionCard
            label='Mid-Term Inspection'
            isReverse
            image={InspectionSearch}
          />
          <InspectionCard
            label='Period inspection at the end of production'
            isReverse
            image={InspectionFile}
          />
          <InspectionCard label='Supervise' isReverse image={CheckList} />
        </div>
      </div>
    </div>
  )
}

export default Inspection
