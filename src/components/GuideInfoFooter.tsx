import {
  faCircleQuestion,
  faFilePdf,
  faPlay
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface GuideInfoFooterProps {
  src?: string
}

const GuideInfoFooter: React.FC<GuideInfoFooterProps> = ({ src }) => {
  return (
    <div className='mt-5 '>
      <h2 className='mb-2 text-2xl font-bold'>Guides</h2>
      <div className='flex h-10 items-center justify-center pl-16 pr-16'>
        <div className='h-px w-full bg-black10' />
      </div>
      <div className='ml-12 grid grid-flow-col grid-rows-2 items-center justify-around'>
        <div className='row-span-3 mx-auto bg-white p-2'>
          <iframe
            src={src}
            className='aspect-video w-full'
            height={300}
            width={600}></iframe>
        </div>
        <div className='col-span-2'>
          <button className='hover:bg-grey text-grey-darkest inline-flex h-20 w-64 items-center rounded-xl bg-white py-2 px-4 font-bold shadow-lg'>
            <FontAwesomeIcon
              icon={faFilePdf}
              className='text-5xl text-primary'
            />
            <span className='ml-8 mr-16 text-lg'>Guides</span>
            <FontAwesomeIcon icon={faPlay} fontSize={15} />
          </button>
        </div>
        <div className='col-span-2'>
          <button className='hover:bg-grey text-grey-darkest inline-flex h-20 w-64 items-center rounded-xl bg-white py-2 px-4 font-bold shadow-lg'>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className='text-5xl text-primary'
            />
            <span className='ml-8 mr-16 text-lg'>FAQ</span>
            <FontAwesomeIcon icon={faPlay} fontSize={15} />
          </button>
        </div>
      </div>
      <div className='flex h-10 items-center justify-center pl-16 pr-16'>
        <div className='h-px w-full bg-black10' />
      </div>
    </div>
  )
}

export default GuideInfoFooter
