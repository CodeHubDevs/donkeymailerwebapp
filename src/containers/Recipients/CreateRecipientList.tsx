import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { useCreateRecipientLists } from '@/api'
import { useRecipientLists } from '@/api/useRecipientLists'
import FormInput from '@/components/FormInput'
import Spinner from '@/components/Spinner'
import { useAuth } from '@/context/AuthContext'
import useAlternativeAddressStore from '@/stores/useAlternativeAddressStore'

import AlternativeAddressModal from './AlternativeAddressModal'

const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  company_name: yup.string(),
  address1: yup.string().required(),
  address2: yup.string(),
  city: yup.string().required(),
  county_or_state: yup.string(),
  postal_or_zipcode: yup.string().required(),
  country: yup.string().required(),
  phone_number: yup.string()
})

const CreateRecipientList = ({ groupName, grp, stannpId }: any) => {
  const [formArray, setFormArray] = useState<any>([])
  const [isFormActive, setIsFormActive] = useState(false)
  const [alternativeAddresses, setAlternativeAddresses] = useState<any>([])
  const [isAlternativeExist, setIsAlternativeExist] = useState(false)
  const [showAlternativeAddressModal, setShowAlternativeAddressModal] =
    useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { data: lists, mutate } = useRecipientLists(stannpId)

  const { execute, isLoading } = useCreateRecipientLists()

  const { alternativeAddress, setAlternativeAddress }: any =
    useAlternativeAddressStore()

  const auth = useAuth()

  useEffect(() => {
    if (alternativeAddress) {
      setValue('address1', alternativeAddress)
      setIsAlternativeExist(true)
    }
  }, [alternativeAddress, setValue])

  const addInputField = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    setFormArray([...formArray, formArray.length + 1])
    setIsFormActive(true)
  }, [formArray])

  const cancelInputField = useCallback(() => {
    setFormArray([])
    setIsFormActive(false)
    setAlternativeAddress('')
    setIsAlternativeExist(false)
    reset()
  }, [reset, setAlternativeAddress])

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        await execute({
          ...data,
          address3: '',
          job_title: '',
          stannp_group_id: stannpId,
          modified_by: 'admin',
          recipients_grp: grp,
          user_id: auth.decoded?.user_id
        })

        setAlternativeAddress('')
        setIsAlternativeExist(false)
        toast.success('Recipient added')
        cancelInputField()
        await mutate()
      } catch (error: any) {
        console.log(error)
        toast.error(
          error.response.data.data.is_valid === false
            ? 'This recipient is invalid'
            : 'Something went wrong'
        )
        setAlternativeAddresses(error.response.data.data.alternative_addresses)
        setTimeout(() => {
          setShowAlternativeAddressModal(true)
        }, 1000)
      }
    },
    [
      execute,
      grp,
      stannpId,
      mutate,
      cancelInputField,
      auth.decoded?.user_id,
      setAlternativeAddress
    ]
  )

  return (
    <>
      <AlternativeAddressModal
        showModal={showAlternativeAddressModal}
        closeModal={() => setShowAlternativeAddressModal(false)}
        alternativeAddresses={alternativeAddresses}
      />
      <div className='mt-4 flex items-center justify-between border-t py-2'>
        <h3 className='text-xl font-bold'>{groupName}</h3>
        <button
          onClick={() => (isFormActive ? cancelInputField() : addInputField())}
          type='button'
          className={`rounded-lg bg-primary from-secondary to-primary py-2 px-8 text-white ${
            isFormActive && 'bg-red-400'
          }`}>
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
          <FontAwesomeIcon
            icon={faCirclePlus}
            className={`mt-1 rounded-full bg-primary text-white ${
              isFormActive && 'bg-red-400'
            }`}
          />
          <span className='ml-2 text-center text-sm font-bold text-white'>
            {isFormActive ? 'Cancel' : 'Add Recipient'}
          </span>
        </button>
      </div>
      <div className='grid grid-cols-11 gap-2 border-b border-t py-4 text-center text-sm font-bold text-gray-700'>
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Company Name</h4>
        <h4>Address 1</h4>
        <h4>Address 2</h4>
        <h4>City</h4>
        <h4>County/State</h4>
        <h4>Postal/Zip Code</h4>
        <h4>Country</h4>
        <h4>Phone Number</h4>
      </div>
      {formArray.map((item: any) => (
        <form
          key={item}
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-11 gap-2 py-3 text-sm font-bold text-gray-700'>
          <FormInput
            fieldName='first_name'
            register={register}
            placeholder='First Name'
            errors={errors.first_name}
          />
          <FormInput
            fieldName='last_name'
            register={register}
            placeholder='Last Name'
            errors={errors.last_name}
          />
          <FormInput
            fieldName='company_name'
            register={register}
            placeholder='Company Name'
            errors={errors.company_name}
          />
          <FormInput
            fieldName='address1'
            register={register}
            placeholder='Address 1'
            disabled={isAlternativeExist}
            className={`${isAlternativeExist && 'border-green-500'}`}
            errors={errors.address1}
          />
          <FormInput
            fieldName='address2'
            register={register}
            placeholder='Address 2'
            errors={errors.address2}
          />
          <FormInput
            fieldName='city'
            register={register}
            placeholder='City'
            errors={errors.city}
          />
          <FormInput
            fieldName='county_or_state'
            register={register}
            placeholder='County/State'
            errors={errors.county_or_state}
          />
          <FormInput
            fieldName='postal_or_zipcode'
            register={register}
            placeholder='Postal/Zip Code'
            errors={errors.postal_or_zipcode}
          />
          <FormInput
            fieldName='country'
            register={register}
            placeholder='Country'
            errors={errors.country}
          />
          <FormInput
            fieldName='phone_number'
            register={register}
            placeholder='Phone Number'
            errors={errors.phone_number}
          />
          <button
            className={`flex h-6 w-16 items-center justify-center self-center justify-self-center rounded-full bg-primary ${
              isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            }`}
            disabled={isLoading}>
            <h5 className='flex items-center justify-center gap-2 text-center text-xs font-bold text-white'>
              {isLoading && <Spinner className='h-3 w-3' />}Save
            </h5>
          </button>
        </form>
      ))}
      {lists?.recipients && lists.recipients.length > 0 && (
        <>
          {lists?.recipients?.map((list: any) => (
            <div
              key={list.id}
              className='grid grid-cols-11 items-center gap-2 py-3 text-center text-sm text-gray-700'>
              <p>{list.firstname}</p>
              <p>{list.lastname}</p>
              <p>{list.company}</p>
              <p>{list.address1}</p>
              <p>{list.address2}</p>
              <p>{list.city}</p>
              <p>{list.county}</p>
              <p>{list.postcode}</p>
              <p>{list.country}</p>
              <p>{list.phone_number}</p>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default CreateRecipientList
