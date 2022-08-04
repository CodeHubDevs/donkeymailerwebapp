import {
  faDownload,
  faEye,
  faFileArrowUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useAddTemplateBoard, useTemplateBoard } from '@/api'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import { useAuth } from '@/context/AuthContext'

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

  const [selectedFile, setSelectedFile] = useState<any>([])

  const { register, handleSubmit, setValue } = useForm()

  const auth = useAuth()

  const { execute: addExecute } = useAddTemplateBoard()
  const { data: templateBoard, mutate, isValidating } = useTemplateBoard()

  const isLoading = useMemo(() => {
    return isValidating
  }, [isValidating])

  useEffect(() => {
    if (templateBoard) {
      setValue('template_name', templateBoard.template_name)

      setSelectedCountry(
        countryOptions.find((c) => c.value === templateBoard.country) ??
          countryOptions[0]
      )
      setSelectedPostCard(
        postCardOptions.find((c) => c.value === templateBoard.specifications) ??
          postCardOptions[0]
      )
    }
  }, [templateBoard, setSelectedPostCard, setSelectedCountry, setValue])

  const onSubmit = useCallback(
    async (data: any, e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault()
      // const reader = new FileReader()
      // reader.readAsDataURL(selectedFile)
      const payload = {
        ...data,
        country: selectedCountry.value,
        user_id: auth.decoded?.user_id,
        specifications: selectedPostCard.value,
        file: selectedFile[0],
        template_name: 'test',
        modified_by: 'admin'
      }
      try {
        if (!templateBoard) {
          await addExecute(payload)
        }
      } catch (e) {
        console.log(e)
      }
    },
    [addExecute, selectedCountry, selectedPostCard, mutate, templateBoard]
  )

  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>Create Your Template</h1>
      <form
        onSubmit={handleSubmit(async (data, e: any) => await onSubmit(data, e))}
        className='flex flex-col items-start px-24'>
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
        <div className='flex w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-black25 bg-gray-100 p-20'>
          <FontAwesomeIcon icon={faFileArrowUp} className='h-12 w-12' />
          <input
            onChange={(e) => setSelectedFile(e.target.files)}
            type='file'
            className='text-grey-500 text-sm file:mr-5 file:rounded-full file:border-0 file:bg-primary file:py-2 file:px-6 file:text-sm file:font-medium file:text-white hover:file:cursor-pointer focus:outline-none'
          />
          <div className='flex items-center gap-4'>
            <button className='flex items-center text-sm text-primary'>
              <FontAwesomeIcon icon={faEye} className='mr-2' />
              <span>Preview Template Guide</span>
            </button>
            <button className='flex items-center text-sm text-primary'>
              <FontAwesomeIcon icon={faDownload} className='mr-2' />
              <span>Download(.psd) Template Guide</span>
            </button>
          </div>
        </div>
        <button className='mt-8 self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default TemplateForm
