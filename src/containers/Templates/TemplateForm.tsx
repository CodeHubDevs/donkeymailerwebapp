import { faDownload, faFileArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Document,
  Image,
  Page,
  pdf,
  PDFViewer,
  // Text,
  View
} from '@react-pdf/renderer'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import createTw from 'react-pdf-tailwind'

import { useAddTemplateBoard } from '@/api'
import { useSelectTemplate } from '@/api/useSelectTemplate'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import ProgressBar from '@/components/ProgressBar'
import StepForm from '@/components/StepForm'
import { useAuth } from '@/context/AuthContext'
import useProcessStore from '@/stores/useProcessStore'
import useProgressUploadStore from '@/stores/useProgressUploadStore'

const countryOptions = [
  { value: '', label: 'Select Country' },
  { value: 'UK', label: 'United Kingdom' }
]

const sizeOptions = [
  { value: '', label: 'Select Size' },
  { value: 'A5', label: 'A5' },
  { value: 'A6', label: 'A6' }
  // { value: 'A5-ENV', label: 'A5-ENV' }
]

const pageOptions = [
  { value: '1', label: 'Page 1' },
  { value: '2', label: 'Page 2' }
]

const PdfTest = ({ firstFile, secondFile }: any) => {
  const tw = createTw({
    theme: {}
  })

  const firstImage = URL.createObjectURL(
    firstFile.length > 0 ? firstFile[0] : new Blob([''], { type: 'text/plain' })
  )

  const secondImage = URL.createObjectURL(
    secondFile.length > 0
      ? secondFile[0]
      : new Blob([''], { type: 'text/plain' })
  )

  return (
    <Document>
      <Page orientation='landscape' size='A6' style={tw('w-full h-full')}>
        <View style={tw('relative z-10 w-full h-full')}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            src={firstImage}
            fixed
            style={tw('absolute z-[-1] w-full object-cover')}
          />
        </View>
      </Page>
      {secondFile && (
        <Page orientation='landscape' size='A6'>
          <View style={tw('relative z-10 w-full h-full')}>
            {/* <View style={tw('bg-blue-200 w-56 ml-72 mt-56 h-32 text-xs p-2')}>
              <Text>First Name</Text>
              <Text>Last Name</Text>
            </View> */}
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              src={secondImage}
              fixed
              style={tw('absolute z-[-1] w-full object-cover')}
            />
          </View>
        </Page>
      )}
    </Document>
  )
}

const TemplateForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0])
  const [selectedPage, setSelectedPage] = useState(pageOptions[0])
  const [selectedFile, setSelectedFile] = useState<any>([])
  const [selectedFileTwo, setSelectedFileTwo] = useState<any>([])
  const { campaign, setTemplateId }: any = useProcessStore()
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const auth = useAuth()

  const firstRef = useRef<any>(null)
  const secondRef = useRef<any>(null)

  const { execute: addExecute, isLoading } = useAddTemplateBoard()
  const { execute: createExecute } = useSelectTemplate()
  const { setProgress }: any = useProgressUploadStore()

  const handleChangeFirst = useCallback((e: any) => {
    setSelectedFile([...e.target.files])
  }, [])

  const handleChangeSecond = useCallback((e: any) => {
    setSelectedFileTwo([...e.target.files])
  }, [])

  useEffect(() => {
    if (selectedFile.length) {
      firstRef.current.value = null
    }
  }, [selectedFile])

  useEffect(() => {
    if (selectedFileTwo.length) {
      secondRef.current.value = null
    }
  }, [selectedFileTwo])

  useEffect(() => {
    if (campaign.destination && campaign.type && router.query.new) {
      setSelectedCountry(
        countryOptions.filter(
          (co) => co.value.toUpperCase() === campaign.destination.toUpperCase()
        )[0]
      )
      setSelectedSize(sizeOptions.filter((so) => so.value === campaign.type)[0])
    }
  }, [campaign, router])

  const downloadTemplate = useMemo(() => {
    if (selectedSize.value === 'A5') {
      return '/files/A5Postcard-Template.pdf'
    }
    if (selectedSize.value === 'A6') {
      return '/files/A6Postcard-Template.pdf'
    }
    // if (selectedSize.value === 'A5-ENV') {
    //   return '/files/A5EnvelopedPostcard-Template.pdf'
    // }
  }, [selectedSize])

  const onSubmit = useCallback(
    async (data: any, e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault()
      const generatedPdf = new File(
        [
          await pdf(
            <PdfTest firstFile={selectedFile} secondFile={selectedFileTwo} />
          ).toBlob()
        ],
        `${Date.now().toString()}.pdf`,
        { type: 'application/pdf' }
      )
      const payload = {
        ...data,
        country: selectedCountry.value,
        user_id: auth.decoded?.user_id,
        specifications: selectedSize.value,
        // Change for new pdf
        file: generatedPdf,
        modified_by: 'admin'
      }

      try {
        const { data } = await addExecute(payload)
        await createExecute({
          campaign_id: campaign.dbId.toString(),
          templates_id: data.id.toString(),
          country: 'Not'
        })
        toast.success('Template created successfully')
        setProgress(0)
        if (router.query.new) {
          setTemplateId(data.stannp_template_id)
          return await router.push('/app/recipient/select?new=true')
        }
        return await router.push('/app/template')
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
      setProgress,
      selectedFileTwo,
      setTemplateId,
      createExecute,
      campaign
    ]
  )

  return (
    <>
      {router.query.step && <StepForm currStep={2} />}
      <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
        <h1 className='text-2xl font-bold'>Create Your Template</h1>
        <form
          onSubmit={handleSubmit(
            async (data, e: any) => await onSubmit(data, e)
          )}
          className='flex flex-col items-start px-24'>
          <div className='my-8 flex w-full gap-32'>
            <div className='flex w-full flex-col gap-4'>
              <FormSelect
                disabled={campaign.destination && router.query.new}
                label='Choose a country'
                options={countryOptions}
                value={selectedCountry}
                onChange={setSelectedCountry}
              />
              <FormSelect
                disabled={campaign.type && router.query.new}
                label='Choose a post card'
                options={sizeOptions}
                value={selectedSize}
                onChange={setSelectedSize}
              />
            </div>
            <div className='flex w-full flex-col gap-4'>
              <FormInput
                fieldName='template_name'
                label='Template Name'
                register={register}
                placeholder='Enter template name...'
              />
              <FormSelect
                label='Page Number'
                options={pageOptions}
                value={selectedPage}
                onChange={setSelectedPage}
              />
            </div>
          </div>
          {selectedPage.value === '1' ? (
            <div className='flex w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-black25 bg-gray-100 p-20'>
              <FontAwesomeIcon icon={faFileArrowUp} className='h-12 w-12' />
              <input
                ref={firstRef}
                accept='image/*'
                onChange={(e) => handleChangeFirst(e)}
                type='file'
                id='page1'
                className='text-grey-500 hidden text-sm file:mr-5 file:rounded-full file:border-0 file:bg-primary file:py-2 file:px-6 file:text-sm file:font-medium file:text-white hover:file:cursor-pointer focus:outline-none'
              />
              <label
                htmlFor='page1'
                className='rounded-full bg-primary py-2 px-4 text-white hover:cursor-pointer'>
                Upload Page 1
              </label>
              <a
                href={downloadTemplate}
                onClick={() =>
                  selectedSize.value
                    ? toast.success(
                        `Downloading ${selectedSize.label} template`
                      )
                    : toast.error('Please select a size')
                }
                download='template.pdf'
                className='flex cursor-pointer items-center text-sm text-primary'>
                <FontAwesomeIcon icon={faDownload} className='mr-2' />
                <span>Download Template Guide</span>
              </a>
            </div>
          ) : (
            <div className='flex w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-black25 bg-gray-100 p-20'>
              <FontAwesomeIcon icon={faFileArrowUp} className='h-12 w-12' />
              <input
                ref={secondRef}
                onChange={(e) => handleChangeSecond(e)}
                accept='image/*'
                type='file'
                id='page2'
                className='text-grey-500 hidden text-sm file:mr-5 file:rounded-full file:border-0 file:bg-primary file:py-2 file:px-6 file:text-sm file:font-medium file:text-white hover:file:cursor-pointer focus:outline-none'
              />
              <label
                htmlFor='page2'
                className='rounded-full bg-primary py-2 px-4 text-white hover:cursor-pointer'>
                Upload Page 2
              </label>
              <a
                href={downloadTemplate}
                onClick={() =>
                  selectedSize.value
                    ? toast.success(
                        `Downloading ${selectedSize.label} template`
                      )
                    : toast.error('Please select a size')
                }
                download='template.pdf'
                className='flex cursor-pointer items-center text-sm text-primary'>
                <FontAwesomeIcon icon={faDownload} className='mr-2' />
                <span>Download Template Guide</span>
              </a>
            </div>
          )}
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
      {selectedFile.length > 0 && (
        <div className='mt-10 rounded-2xl bg-white p-8 shadow-md'>
          <h3 className='mb-4 text-2xl font-bold'>Preview Template</h3>
          <div className='h-[500px] w-full'>
            {typeof window !== 'undefined' && (
              <PDFViewer
                showToolbar={true}
                className='h-full w-full rounded-2xl'>
                <PdfTest
                  firstFile={selectedFile}
                  secondFile={selectedFileTwo}
                  firstName='Charlene'
                />
              </PDFViewer>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default TemplateForm
