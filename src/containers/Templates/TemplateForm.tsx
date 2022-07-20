import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'

import TemplateModal from './TemplateModal'

const countryOptions = [
  { value: '', label: 'Select Country' },
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' }
]

const postCardOptions = [
  { value: '', label: 'Select Post Card' },
  { value: '4x6', label: '4 x 6' },
  { value: '6x9', label: '6 x 9' },
  { value: '6x11', label: '6 x 11' },
  { value: '8.5x11', label: '8.5 x 11' }
]

const TemplateForm = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(
    countryOptions[0]
  )
  const [selectedPostCard, setSelectedPostCard] = React.useState(
    postCardOptions[0]
  )

  const [isOpen, setIsOpen] = React.useState(false)

  const { register } = useForm()

  return (
    <>
      <TemplateModal
        onClick={() => {}}
        setShowModal={setIsOpen}
        showModal={isOpen}
      />
      <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
        <h1 className='text-2xl font-bold'>Create Your Template</h1>
        <form className='flex flex-col items-start px-24'>
          <div className='my-8 flex w-full gap-32'>
            <div className='flex w-full flex-col gap-4'>
              <FormSelect
                label='Choose a country'
                options={countryOptions}
                value={selectedCountry}
                onChange={setSelectedCountry}
              />
              <FormSelect
                label='Choose a post card'
                options={postCardOptions}
                value={selectedPostCard}
                onChange={setSelectedPostCard}
              />
            </div>
            <FormInput
              fieldName='name'
              label='Template Name'
              register={register}
              placeholder='Enter template name...'
            />
          </div>
          <div className='flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary bg-secondary10 p-32'>
            <FontAwesomeIcon
              icon={faFileArrowUp}
              className='h-16 w-16 text-primary'
            />
            <button
              type='button'
              onClick={() => setIsOpen(true)}
              className='mt-4 rounded-full bg-primary py-1 px-12 font-light text-white'>
              Upload
            </button>
          </div>
          <button className='mt-8 self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default TemplateForm
