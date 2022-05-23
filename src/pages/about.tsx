import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import DividerIcon from '@/components/DividerIcon'

interface AboutCardProps {
  title: string
  description: string
}

const About = () => {
  return (
    <div className='bg-white py-32'>
      <div className='mx-64 mb-8'>
        <DividerIcon icon={faQuestionCircle} />
      </div>
      <h2 className='mb-16 px-80 text-center text-4xl font-bold'>
        Small{' '}
        <span className='bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent'>
          eDonkey
        </span>{' '}
        is dedicated to business services, its main business is: Direct Mail
        Business + Inspection Service
      </h2>
      <div className='mx-64 grid grid-cols-2 gap-4'>
        <AboutCard
          title='Direct Mail Business'
          description='With a professional service team, rich overseas
marketing resources and advanced printing
technology, we provide customers with complete
direct mail marketing solutions.'
        />
        <AboutCard
          title='Inspection Service'
          description='A professional third-party testing company
can provide you with any customized and standardized quality control services. The company is headquartered in Shenzhen, with branches in more than ten cities including Ningbo, Shanghai, Beijing, Tianjin, Qingdao, etc., with more than 270 experienced professional testing personnel. We can meet all your inspections in different cities in China. We can take on bulk orders and arrange local inspectors, saving customers extra travel costs. In addition, we are not only capable of presenting the true quality of your products, but also capable of proposing effective solutions to quality problems.'
        />
      </div>
    </div>
  )
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => {
  return (
    <div className='rounded-b-3xl p-8 text-center shadow-2xl'>
      <h5 className='mb-10 text-xl font-bold text-primary'>{title}</h5>
      <p className='text-lg text-black50'>{description}</p>
    </div>
  )
}

export default About
