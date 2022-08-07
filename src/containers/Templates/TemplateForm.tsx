import { faDownload, faFileArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useAddTemplateBoard, useTemplateBoard } from '@/api'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import ProgressBar from '@/components/ProgressBar'
import { useAuth } from '@/context/AuthContext'
import useProgressUploadStore from '@/stores/useProgressUploadStore'

const countryOptions = [
  { value: '', label: 'Select Country' },
  { value: 'UK', label: 'United Kingdom' }
]

const sizeOptions = [
  { value: '', label: 'Select Size' },
  { value: 'A5', label: 'A5' },
  { value: 'A6', label: 'A6' },
  { value: 'A5-ENV', label: 'A5-ENV' }
]

const TemplateForm = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(
    countryOptions[0]
  )
  const [selectedSize, setSelectedSize] = React.useState(sizeOptions[0])

  const [selectedFile, setSelectedFile] = useState<any>([])

  const router = useRouter()

  const { register, handleSubmit, setValue } = useForm()

  const auth = useAuth()

  const { execute: addExecute, isLoading } = useAddTemplateBoard()
  const { data: templateBoard } = useTemplateBoard()

  const { setProgress }: any = useProgressUploadStore()

  useEffect(() => {
    if (templateBoard) {
      setValue('template_name', templateBoard.template_name)

      setSelectedCountry(
        countryOptions.find((c) => c.value === templateBoard.country) ??
          countryOptions[0]
      )
      setSelectedSize(
        sizeOptions.find((c) => c.value === templateBoard.specifications) ??
          sizeOptions[0]
      )
    }
  }, [templateBoard, setValue])

  const downloadTemplate = useMemo(() => {
    if (selectedSize.value === 'A5') {
      return '/files/A5Postcard-Template.pdf'
    }
    if (selectedSize.value === 'A6') {
      return '/files/A6Postcard-Template.pdf'
    }
    if (selectedSize.value === 'A5-ENV') {
      return '/files/A5EnvelopedPostcard-Template.pdf'
    }
  }, [selectedSize])

  const onSubmit = useCallback(
    async (data: any, e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault()
      const payload = {
        ...data,
        country: selectedCountry.value,
        user_id: auth.decoded?.user_id,
        specifications: selectedSize.value,
        file: selectedFile[0],
        modified_by: 'admin'
      }
      try {
        await addExecute(payload)
        toast.success('Template created successfully')
        setProgress(0)
        await router.push('/app/template')
      } catch (e) {
        console.log(e)
        toast.error('Something went wrong')
      }
    },
    [
      auth.decoded,
      addExecute,
      selectedCountry,
      selectedSize,
      selectedFile,
      router,
      setProgress
    ]
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
              options={sizeOptions}
              value={selectedSize}
              onChange={setSelectedSize}
            />
          </div>
          <FormInput
            fieldName='template_name'
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
          <a
            href={downloadTemplate}
            onClick={() =>
              selectedSize.value
                ? toast.success(`Downloading ${selectedSize.label} template`)
                : toast.error('Please select a size')
            }
            download='template.pdf'
            className='flex cursor-pointer items-center text-sm text-primary'>
            <FontAwesomeIcon icon={faDownload} className='mr-2' />
            <span>Download Template Guide</span>
          </a>
        </div>
        {isLoading && (
          <div className='mt-4 w-full'>
            <ProgressBar />
          </div>
        )}
        <button className='mt-8 self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default TemplateForm
